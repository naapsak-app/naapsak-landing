// panel/auth.js
// Global fonksiyon export: login.html bununla kontrol ediyor.
(function () {
  // Mevcut USERS objen sende var (hash'ler). Aynen kalsın diye ellemiyorum.
  // Aşağıdaki satırları, kendi USERS objenin ALTINA eklemen yeterli.

  async function sha256Hex(str) {
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  // ✅ Login sayfasının aradığı fonksiyon:
  window.naapsakAuthVerify = async (username, password) => {
    try {
      // USERS senin dosyada zaten var
      const u = (typeof USERS !== "undefined") ? USERS[username] : null;
      if (!u) return { ok: false };

      const hash = await sha256Hex(username + ":" + password);
      if (hash !== u.hash) return { ok: false };

      // Senin auth.js'te admin = "admin", user = "user" var.
      // Login sayfası admin değilse partner'a atıyor.
      const role = (u.role === "admin") ? "admin" : "partner";
      return { ok: true, role };
    } catch (e) {
      console.error("Auth error:", e);
      return { ok: false };
    }
  };
})();
