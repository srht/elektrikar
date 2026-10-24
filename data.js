// Veriler web aramasında bulunan kaynaklardan derlendi. Fiyatlar 2023 tarihlidir; güncel değildir.
window.CARS = [
  { id: "ami", name: "Citroën Ami", tip: "Dörtteker (L6e)", batarya: "5,5 kWh Li-ion", menzil: "≈75 km (kaynaklara göre 70–100 km)",
    guc: "6 kW / 40 Nm", hiz: "45 km/s", sarj: "220 V prizden ≈3 saatte tam şarj (entegre kablo)", fiyat: "298.000 TL (2023)",
    notlar: "Özel şarj istasyonu gerektirmez; şehir içi kısa mesafe için tasarlandı.",
    kaynak: [["Motor1","https://tr.motor1.com/news/591516/citroen-ami-turkiyeye-geldi/"],["Stellantis basın","https://www.media.stellantis.com/me-tr/citroen/press/turkey-elektrikli-mobilitede-citroen-ami-etkisi"],["LOG","https://www.log.com.tr/turkiyede-satisi-yapilan-mini-elektrikli-arac-modelleri"]] },
  { id: "cooperse", name: "Mini Cooper SE", tip: "Hatchback", batarya: "—", menzil: "232 km",
    guc: "—", hiz: "—", sarj: "Hızlı şarjda 30 dk'da %80", fiyat: "916.000 – 1.189.000 TL (2023, kaynaklar farklı)",
    notlar: "Fiyat farkı iki kaynağın farklı tarihlerinden kaynaklanıyor olabilir.",
    kaynak: [["LOG","https://www.log.com.tr/turkiyede-satisi-yapilan-mini-elektrikli-arac-modelleri"],["Arabam","https://www.arabam.com/blog/?p=63590"]] },
  { id: "countryman", name: "Mini Countryman E / SE ALL4", tip: "Kompakt SUV (2026)", batarya: "66,45 kWh (brüt)", menzil: "WLTP 462 km (E) / 433 km (SE ALL4)",
    guc: "—", hiz: "—", sarj: "—", fiyat: "Kaynakta yok",
    notlar: "Mini'nin en büyük elektrikli modeli; 'mini' segmentin üst ucu.",
    kaynak: [["Araclo","https://www.araclo.com/blog/mini-countryman-e-inceleme-turkiyede-alinir-mi-menzil-fiyat-ve-kullanici-yorumlari-2026"]] },
  { id: "komi", name: "Jiayuan Komi", tip: "Şehir otomobili", batarya: "35 kWh", menzil: "≈320 km",
    guc: "—", hiz: "—", sarj: "—", fiyat: "590.000 TL (2023)", notlar: "", kaynak: [["LOG","https://www.log.com.tr/turkiyede-satisi-yapilan-mini-elektrikli-arac-modelleri"]] },
  { id: "t03", name: "Leapmotor T03", tip: "Şehir otomobili", batarya: "41,3 kWh", menzil: "417 km",
    guc: "—", hiz: "—", sarj: "—", fiyat: "849.000 TL (2023)", notlar: "", kaynak: [["LOG","https://www.log.com.tr/turkiyede-satisi-yapilan-mini-elektrikli-arac-modelleri"]] }
];
// Kullanıcı yorumları: gerçek yorum eklemek için bu diziyi doldurun. {car, yazar, metin, kaynak}
window.REVIEWS = [];
