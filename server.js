import express from "express";
import multer from "multer";

const app = express();
app.set("trust proxy", true);

const TOKEN = process.env.BOT_TOKEN;
const CHAT = process.env.CHAT_ID;
const API = `https://api.telegram.org/bot${TOKEN}`;

if (!TOKEN || !CHAT) console.warn("!! BOT_TOKEN and/or CHAT_ID missing");

app.use(express.static("public", { extensions: ["html"] }));

/* ---- per-IP rate limit: 40 requests / minute ---- */
const hits = new Map();
app.use("/send", (req, res, next) => {
  const ip = (req.headers["x-forwarded-for"] || req.ip || "").split(",")[0].trim();
  const now = Date.now();
  const rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > 60000) { rec.n = 0; rec.t = now; }
  if (++rec.n > 40) return res.status(429).json({ ok: false, description: "rate limited" });
  hits.set(ip, rec);
  if (hits.size > 5000) hits.clear();
  next();
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 12 * 1024 * 1024, files: 4 }
});

app.post("/send", upload.any(), async (req, res) => {
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
    res.status(r.status).json(out);
  } catch (err) {
    console.error("send failed:", err);
    res.status(502).json({ ok: false, description: "upstream error" });
  }
});

app.get("/health", (_req, res) => res.type("text").send("ok"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
