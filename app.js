const $ = (s) => document.querySelector(s);
const ph = (n) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#e8f1ee"/><text x="50%" y="48%" text-anchor="middle" font-family="sans-serif" font-size="26" fill="#1b5e4b">${n}</text><text x="50%" y="60%" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5b7a72">fotoğraf eklenecek: img/</text></svg>`);
const row = (k, v) => `<tr><th>${k}</th><td>${v}</td></tr>`;
$('#cars').innerHTML = CARS.map(c => `
  <article class="card" id="${c.id}">
    <img src="img/${c.id}.jpg" alt="${c.name}" onerror="this.onerror=null;this.src='${ph(c.name)}'">
    <div class="body"><h2>${c.name}</h2><p class="tip">${c.tip}</p>
    <table>${row('Batarya', c.batarya)}${row('Menzil', c.menzil)}${row('Güç / tork', c.guc)}${row('Maks. hız', c.hiz)}${row('Şarj', c.sarj)}${row('Fiyat', c.fiyat)}</table>
    ${c.notlar ? `<p>${c.notlar}</p>` : ''}
    <h3>Kullanıcı yorumları</h3>
    ${(REVIEWS.filter(r => r.car === c.id).map(r => `<blockquote>${r.metin}<cite>— ${r.yazar}, <a href="${r.kaynak}">kaynak</a></cite></blockquote>`).join('')) || '<p class="empty">Henüz doğrulanmış kullanıcı yorumu eklenmedi.</p>'}
    <p class="src">Kaynaklar: ${c.kaynak.map(([n,u]) => `<a href="${u}" rel="noopener">${n}</a>`).join(', ')}</p></div>
  </article>`).join('');
