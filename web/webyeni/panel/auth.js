// panel/auth.js
// Basit (MVP) login: kullanıcı adı + şifre -> SHA-256 hash kontrolü.
// Not: Static site olduğu için bu "enterprise security" değildir; amaç gizli panel + role kontrolü.

const USERS = {
  "adm.unal": {
    "role": "admin",
    "hash": "0d29966df1e939483b5f5e73699ad9a278c2503bb128b4b57a842506fc173204"
  },
  "adm.clko": {
    "role": "admin",
    "hash": "8a0007498f5707c8f5022e35aede26b5a50847c1be0d08c0947a8c46b00b24da"
  },
  "tech.unal": {
    "role": "user",
    "hash": "9d5ce5c5f12f61560c02921cf921a909ab596fe79f2bcb11cc723e04c3126274"
  },
  "tech.clko": {
    "role": "user",
    "hash": "4faba8958067f19f426708b7fc42b3ea6f72133543fbfc76babe2b9aa7902576"
  },
  "tech.clq": {
    "role": "user",
    "hash": "6ff81e0d1ae0816ab2f8c252ba3259e43fb8e50a558ff718069eb948ef19ce44"
  },
  "tech.clqo": {
    "role": "user",
    "hash": "5a3d16be15f0f8cb71b0131f5810e2c559acc944270a8ff5235a024cd8a126ce"
  },
  "tech.ekrem": {
    "role": "user",
    "hash": "89c0806daaa166d2df17a98453f7257fc00d82cf758a121ae58414d13babce6f"
  },
  "tech.yunus": {
    "role": "user",
    "hash": "1a75084360094a71202e655d73e56149f9a5ffd290eaf55bea47927111ba7620"
  },
  "tech.idil": {
    "role": "user",
    "hash": "6c0ee5d4ab7fefeb54f772338bf5741c42d9de269af41dc01f885fcf99355d91"
  },
  "tech.eto": {
    "role": "user",
    "hash": "c91a4e19bd6e26ff3722ddd20e8b251f507e8e1643bd5b3a25d20cfd3bc5a7f3"
  },
  "tech.mırra": {
    "role": "user",
    "hash": "ab2e666343fa464042cf84ac75d1be80fe39e3febec79eb74c0a1c46d4d5efbd"
  },
  "tech.destek": {
    "role": "user",
    "hash": "de09783b20d839f4fbcb7a4f026b70a46d1cbc78f44fb9754e1cea4274da1193"
  },
  "tech.kobi": {
    "role": "user",
    "hash": "017ac36227edfe1c35a5c8a72b1dc679c6207ccffdfd9e6c8bb71316ffeb310c"
  },
  "tech.ops": {
    "role": "user",
    "hash": "26a26b12ae01855ba07728c41a7e66314a3cd8e91aa0f51e0c8793397996f40e"
  }
};

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function setSession(username, role) {
  localStorage.setItem("naapsak_session", JSON.stringify({ username, role, ts: Date.now() }));
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("naapsak_session") || "null");
  } catch {
    return null;
  }
}

function logout() {
  localStorage.removeItem("naapsak_session");
  window.location.href = "./login.html";
}

function requireRole(roles) {
  const s = getSession();
  if (!s || !roles.includes(s.role)) {
    window.location.href = "./login.html";
    return null;
  }
  return s;
}

async function login(username, password) {
  const u = (username || "").trim();
  if (!u || !USERS[u]) return { ok:false, msg:"Kullanıcı bulunamadı." };
  const hash = await sha256Hex(password || "");
  if (hash !== USERS[u].hash) return { ok:false, msg:"Şifre yanlış." };
  setSession(u, USERS[u].role);
  return { ok:true, role: USERS[u].role };
}

window.NAAPS_AUTH = { USERS, login, logout, getSession, requireRole };
