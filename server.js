import express from "express";
import multer from "multer";

const app = express();
app.set("trust proxy", true);

const TOKEN = process.env.BOT_TOKEN;
const CHAT = process.env.CHAT_ID;
const API = `https://api.telegram.org/bot${TOKEN}`;

app.use(express.static("public", { extensions: ["html"] }));

/* ---------- health / diagnostics (no secrets leaked) ---------- */
app.get("/health", (_req, res) => res.type("text").send("ok"));

app.get("/api/status", async (_req, res) => {
  const out = { ok: false, configured: false, reason: "" };
  if (!TOKEN || !CHAT) {
    out.reason = !TOKEN && !CHAT
      ? "BOT_TOKEN and CHAT_ID are not set in Render → Environment"
      : (!TOKEN ? "BOT_TOKEN is not set in Render → Environment" : "CHAT_ID is not set in Render → Environment");
    return res.json(out);
  }
  try {
    const me = await (await fetch(`${API}/getMe`)).json();
    if (!me.ok) { out.reason = "Telegram rejected BOT_TOKEN (wrong or revoked)"; return res.json(out); }
    const chat = await (await fetch(`${API}/getChat?chat_id=${encodeURIComponent(CHAT)}`)).json();
    if (!chat.ok) {
      out.reason = "CHAT_ID is wrong, or you never sent /start to @" + me.result.username;
      return res.json(out);
    }
    out.ok = true; out.configured = true; out.bot = me.result.username;
    res.json(out);
  } catch {
    out.reason = "Server cannot reach api.telegram.org";
    res.json(out);
  }
});

/* ---------- per-IP rate limit ---------- */
const hits = new Map();
app.use("/send", (req, res, next) => {
  const ip = (req.headers["x-forwarded-for"] || req.ip || "").split(",")[0].trim();
  const now = Date.now();
  const rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > 60000) { rec.n = 0; rec.t = now; }
  if (++rec.n > 40) return res.status(429).json({ ok: false, description: "Too many requests, wait a minute" });
  hits.set(ip, rec);
  if (hits.size > 5000) hits.clear();
  next();
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 12 * 1024 * 1024, files: 4 }
});

app.post("/send", upload.any(), async (req, res) => {
  if (!TOKEN || !CHAT) {
    return res.status(500).json({ ok: false, description: "Server not configured: BOT_TOKEN / CHAT_ID missing on Render" });
  }
  try {
    const method = req.body.method === "sendPhoto" ? "sendPhoto" : "sendMessage";
    const fd = new FormData();

    for (const key of Object.keys(req.body)) {
      if (key !== "method") fd.append(key, req.body[key]);
    }
    fd.append("chat_id", CHAT);

    for (const f of req.files || []) {
      fd.append(f.fieldname, new Blob([f.buffer], { type: f.mimetype }), f.originalname || "card.jpg");
    }

    const r = await fetch(`${API}/${method}`, { method: "POST", body: fd });
    const out = await r.json().catch(() => ({ ok: r.ok }));

    if (!out.ok) {
      console.error("telegram:", method, out.description);
      return res.status(502).json({ ok: false, description: out.description || "Telegram rejected the request" });
    }
    res.json({ ok: true });
  } catch (err) {
    console.error("send failed:", err.message);
    res.status(502).json({ ok: false, description: "Could not reach Telegram from the server" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on " + port));
