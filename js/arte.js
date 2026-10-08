/* Ilustrações em SVG geradas por código (sem imagens, sem direitos autorais). */
window.Arte = (function () {
  function pizza(c) {
    var p = "", i, a, x, y;
    var pts = [[50,27],[69,39],[67,63],[48,73],[31,62],[30,40],[50,50],[59,31],[39,33],[72,52],[27,52],[57,67],[44,58],[60,46]];
    for (i = 0; i < pts.length; i++) {
      p += '<circle cx="' + pts[i][0] + '" cy="' + pts[i][1] + '" r="' + (i % 3 === 0 ? 6 : 4.5) + '" fill="' + c[2 + (i % 2)] + '"/>' +
        '<circle cx="' + (pts[i][0] - 1.5) + '" cy="' + (pts[i][1] - 1.5) + '" r="1.4" fill="#fff" opacity=".28"/>';
    }
    var cortes = "";
    for (i = 0; i < 8; i++) { a = i * Math.PI / 4 + Math.PI / 8; x = 50 + 36 * Math.cos(a); y = 50 + 36 * Math.sin(a); cortes += '<line x1="50" y1="50" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>'; }
    var bolhas = "";
    for (i = 0; i < 16; i++) { a = i * Math.PI / 8; bolhas += '<circle cx="' + (50 + 41 * Math.cos(a)).toFixed(1) + '" cy="' + (50 + 41 * Math.sin(a)).toFixed(1) + '" r="2" fill="#b57a2e" opacity=".55"/>'; }
    return '<svg viewBox="0 0 100 100" role="img" aria-hidden="true">' +
      '<circle cx="52" cy="54" r="47" fill="#000" opacity=".35"/>' +
      '<circle cx="50" cy="50" r="48" fill="#8a5a2a"/><circle cx="50" cy="50" r="44" fill="#e0ad52"/>' + bolhas +
      '<circle cx="50" cy="50" r="38" fill="' + c[0] + '"/><circle cx="50" cy="50" r="35" fill="' + c[1] + '"/>' + p +
      '<g stroke="#000" stroke-opacity=".22" stroke-width=".6">' + cortes + '</g>' +
      '<path d="M18 30a40 40 0 0 1 26-17" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="3" stroke-linecap="round"/></svg>';
  }
  function bebida() {
    return '<svg viewBox="0 0 100 100" role="img" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="#2e2219"/>' +
      '<path d="M36 22h28l-3 58a6 6 0 0 1-6 5h-10a6 6 0 0 1-6-5z" fill="#f2b84b"/>' +
      '<path d="M37 40h26l-1.2 40a6 6 0 0 1-6 5h-11.6a6 6 0 0 1-6-5z" fill="#ff7a4d" opacity=".85"/>' +
      '<rect x="34" y="18" width="32" height="6" rx="3" fill="#f6ead7"/></svg>';
  }
  function logo() {
    return '<svg viewBox="0 0 48 48" role="img" aria-label="Logotipo Forno Nobre"><circle cx="24" cy="24" r="23" fill="#c7391b"/>' +
      '<path d="M10 30a14 14 0 0 1 28 0z" fill="#f6ead7"/><path d="M24 12c3 4 5 6 5 9a5 5 0 0 1-10 0c0-3 2-5 5-9z" fill="#f2b84b"/></svg>';
  }
  return { pizza: pizza, bebida: bebida, logo: logo };
})();
