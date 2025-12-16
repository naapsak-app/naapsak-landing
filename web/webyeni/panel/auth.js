// panel/auth.js
(() => {
  // ⚠️ MVP: Static site olduğu için bu gerçek güvenlik değil.
  // Ama URL gizli + rol kontrolü için yeterli.

  const USERS = {
    // partner hesaplar
    "tech.clko":  { role: "partner", password: "Clko!2025" },
    "tech.clq":   { role: "partner", password: "Clq!2025" },
    "tech.clqo":  { role: "partner", password: "Clqo!2025" },
    "tech.ekrem": { role: "partner", password: "Ekrem!2025" },
    "tech.yunus": { role: "partner", password: "Yunus!2025" },
    "tech.idil":  { role: "partner", password: "Idil!2025" },
    "tech.eto":   { role: "partner", password: "Eto!2025" },
    "tech.mirra": { role: "partner", password: "Mirra!2025" }, // ş yerine mirra
    "tech.unal":  { role: "partner", password: "Unal!2025" },

    // admin hesaplar
    "adm.unal": { role: "admin", password: "AdmUnal!2025" },
    "adm.clko": { role: "admin", password: "AdmClko!2025" },
  };

  // ✅ Login sayfasının aradığı fonksiyon
  window.naapsakAuthVerify = async (username, password) => {
    const u = USERS[username];
    if (!u) return { ok: false };
    if (u.password !== password) return { ok: false };
    return { ok: true, role: u.role };
  };
})();
