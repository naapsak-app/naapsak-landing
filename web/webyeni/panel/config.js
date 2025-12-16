// panel/config.js
// Bu dosya ayar dosyası. Static site olduğu için her şey burada.
// 1) Google Form action (formResponse):
export const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeX7_dA66pcN1vJclaXIER67bJpME4uGjOj6-eTeTVaXIcjuw/formResponse";

// 2) Google Form entry id'leri (BU KISMI DOLDURACAĞIZ)
// Form editörde: ⋮ -> "Önceden doldurulmuş bağlantıyı al" -> çıkan URL içinde entry.XXXX yazar.
// O entry.XXXX'leri buraya koy.
export const ENTRY = {
  submittedBy: "entry.475440397",
  name: "entry.480529720",
  category: "entry.1845613143",
  section: "entry.1186988880",
  mapsUrl: "entry.459276383",
  phoneNumber: "entry.1057227281",
  menuUrl: "entry.619561949",
  description: "entry.1765276852",
  badges: "entry.1549839770",
  imageUrl: "entry.2081705056"
};

// 3) Google Sheet okuma (Admin sayfası bunu kullanır)
// Bu yöntem "Publish" istemez; Sheet'i "Anyone with the link can view" yapman yeterli.
export const SHEET_ID = "1ZTuyvCYx057s42ybm_ntJJLVX3ORXIxGJ_b_200uLao";
export const SHEET_GID = "1687211623";

// 4) Published CSV URL (En sağlam yol)
export const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ31DViBrlYJ6HTHA-CDo-z2hd8-FWNh79QqVs7b5JTXJaA9CkdYkImjcNIYXS9hQmh1PasYeOBxrdS/pub?output=csv";
