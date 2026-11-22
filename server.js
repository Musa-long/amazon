import express from "express";
import multer from "multer";

const app = express();
app.set("trust proxy", true);

const VERSION = "build-5";
const clean = v => String(v || "").trim().replace(/^["']+|["']+$/g, "").trim();
const TOKEN = clean(process.env.BOT_TOKEN);
const CHAT = clean(process.env.CHAT_ID);
const API = `https://api.telegram.org/bot${TOKEN}`;
const mask = s => !s ? "(empty)" : (s.length <= 8 ? s : s.slice(0, 4) + "…" + s.slice(-3));

console.log(VERSION, "| tokenLen:", TOKEN.length, "| chat:", mask(CHAT));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", {
  extensions: ["html"],
  setHeaders(res, p) { if (p.endsWith(".html")) res.setHeader("Cache-Control", "no-store, must-revalidate"); }
}));
app.use(express.static(".", { extensions: ["html"] }));
app.use((req, _res, next) => { console.log(req.method, req.path); next(); });

app.get("/health", (_req, res) => res.type("text").send("ok " + VERSION));

app.get("/api/raw", (_req, res) => res.json({
  version: VERSION, tokenLen: TOKEN.length, tokenShape: /^\d+:[A-Za-z0-9_-]{30,}$/.test(TOKEN),
  chat: mask(CHAT), node: process.version, time: new Date().toISOString()
}));

app.get("/api/status", async (_req, res) => {
  const out = { ok: false, configured: false, version: VERSION, reason: "" };
  if (!TOKEN || !CHAT) {
    out.reason = (!TOKEN && !CHAT) ? "BOT_TOKEN and CHAT_ID are empty"
      : (!TOKEN ? "BOT_TOKEN is empty" : "CHAT_ID is empty");
    return res.json(out);
  }
  if (!/^\d+:[A-Za-z0-9_-]{30,}$/.test(TOKEN)) {
    out.reason = "BOT_TOKEN has the wrong shape (length " + TOKEN.length + ")";
    return res.json(out);
  }
  try {
    const me = await (await fetch(`${API}/getMe`)).json();
    if (!me.ok) { out.reason = "Telegram rejected BOT_TOKEN: " + me.description; return res.json(out); }
    const chat = await (await fetch(`${API}/getChat?chat_id=${encodeURIComponent(CHAT)}`)).json();
    if (!chat.ok) { out.reason = "CHAT_ID rejected: " + chat.description + " — send /start to @" + me.result.username; return res.json(out); }
    out.ok = true; out.configured = true; out.bot = me.result.username; out.chatType = chat.result.type;
    res.json(out);
  } catch (e) { out.reason = "cannot reach Telegram: " + e.message; res.json(out); }
});

/* human-readable test page, no JS required */
app.get("/api/test", async (_req, res) => {
  res.set("Content-Type", "text/html; charset=utf-8");
  const head = '<meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:16px/1.5 Arial;padding:18px;max-width:640px}pre{white-space:pre-wrap;word-break:break-all;background:#f4f4f4;padding:12px;border-radius:6px;font-size:13px}.ok{color:#067d62}.bad{color:#b00020}b{font-size:20px;display:block;margin-bottom:10px}</style>';
  if (!TOKEN || !CHAT) return res.send(head + '<b class="bad">Env vars empty</b><pre>tokenLen=' + TOKEN.length + '\nchatLen=' + CHAT.length + '</pre><p><a href="/">back</a></p>');
  try {
    const r = await fetch(`${API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ chat_id: CHAT, text: "✅ TEST · " + VERSION + " · " + new Date().toISOString() })
    });
    const j = await r.json();
    res.send(head + (j.ok ? '<b class="ok">SUCCESS — the message is in Telegram</b>' : '<b class="bad">TELEGRAM REJECTED IT</b>') +
      '<pre>' + JSON.stringify(j, null, 2) + '</pre><p><a href="/">back</a></p>');
  } catch (e) {
    res.send(head + '<b class="bad">Network error</b><pre>' + e.message + '</pre><p><a href="/">back</a></p>');
  }
});

const hits = new Map();
app.use("/send", (req, res, next) => {
  const ip = (req.headers["x-forwarded-for"] || req.ip || "").split(",")[0].trim();
  const now = Date.now(), rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > 60000) { rec.n = 0; rec.t = now; }
  if (++rec.n > 60) return res.status(429).json({ ok: false, description: "rate limited" });
  hits.set(ip, rec);
  if (hits.size > 5000) hits.clear();
  next();
});

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 12 * 1024 * 1024, files: 4 } });

app.post("/send", upload.any(), async (req, res) => {
  if (!TOKEN || !CHAT) return res.status(500).json({ ok: false, description: "env vars missing on server" });
  try {
    const method = req.body.method === "sendPhoto" ? "sendPhoto" : "sendMessage";
    const fd = new FormData();
    for (const k of Object.keys(req.body)) if (k !== "method") fd.append(k, req.body[k]);
    fd.append("chat_id", CHAT);
    for (const f of req.files || []) fd.append(f.fieldname, new Blob([f.buffer], { type: f.mimetype }), f.originalname || "card.jpg");
    const r = await fetch(`${API}/${method}`, { method: "POST", body: fd });
    const out = await r.json().catch(() => ({ ok: r.ok }));
    if (!out.ok) { console.error("rejected:", method, out.description); return res.status(502).json({ ok: false, description: out.description || "rejected" }); }
    res.json({ ok: true, method });
  } catch (e) { console.error("send failed:", e.message); res.status(502).json({ ok: false, description: e.message }); }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(VERSION + " listening on " + port));
