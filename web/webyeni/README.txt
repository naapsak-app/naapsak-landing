# Naapsak Gizli Panel (Static Site MVP)

Bu paket: ana Naapsak tanıtım sitesi + /panel altında gizli giriş + partner başvuru + admin onay ekranı içerir.

## 1) Panel URL
- Partner/Admin giriş: `/panel/login.html`
- Bu sayfa sitede linkli değil (URL bilen girer).

## 2) Kullanıcılar / Şifreler
Admin:
- adm.unal : Npsk!A9vQ#7mT2xL4
- adm.clko : CLKO@6zP!8uR3kW1s

Partner:
- tech.unal : Unal*4Gx9!pZ2vL7q
- tech.clko : T3ch$CLKO_9vK2!aS
- tech.clq : CLQ!7nD3@xP5vR8m
- tech.clqo : CLQO#2mH9!tW6kS1p
- tech.ekrem : Ekr3m!8qL2@vN5sT
- tech.yunus : Yunus@4Kp!9mR2xV7
- tech.idil : Idil#6tQ1!zP8vM3k
- tech.eto : Eto!5vL9@xS2kQ7m
- tech.mırra : Mirra@7pT!2vK9xL4s
- tech.destek : Dstk!9mQ2@vL7xP5k
- tech.kobi : Kobi#8vT1!mR6xQ3p
- tech.ops : Ops@2kL9!vP5mT7x

> Not: Static site olduğu için bu “tam güvenlik” değil; amaç gizli URL + şifre.

## 3) Google Form Bağlama (ÖNEMLİ)
`panel/partner.html` Google Form'a post atar ama bunun için **entry id** gerekir.

### Entry id nasıl alınır?
Google Form editöründe:
- ⋮ (üç nokta) → **Önceden doldurulmuş bağlantıyı al**
- 1-2 alanı doldur → Linki al
- Linkin içinde şunlar yazar: `entry.123456=...`
- Bu entry numaralarını `panel/config.js` içindeki `ENTRY` alanlarına kopyala.

Dosya: `panel/config.js`

## 4) Admin tarafında Sheet okuma
Admin sayfası `panel/admin.html`, Sheet’i CSV olarak okur:
- Sheet’i **Share → Anyone with the link can view** yapman yeterli.
- Publish şart değil.

Sheet ID ve GID zaten `panel/config.js` içinde ayarlı.

## 5) Onay akışı
Admin listede “Onayla” deyince:
- `genellislet.html` yeni sekmede açılır
- Formdan gelen bilgiler URL param ile otomatik doldurulur
- Resim backend’de file upload istiyorsa: sayfada “Resim linki” sadece bilgi amaçlı görünür (indirip manuel upload yaparsın).

