/* Camada de dados da amostra: guarda edições do dono e pedidos no navegador (localStorage).
   Em produção, esta camada troca para um banco online sem mudar o resto. */
window.Store = (function () {
  "use strict";
  var KD = "pt-cardapio-dados:v1", KP = "pt-pedidos:v1", KC = "pt-itens-novos:v1";
  var PALETAS = [["#c0392b","#f4e4b8","#3f7d3a","#a8321f"],["#d9a441","#f7e9bd","#6f9a3a","#c0392b"],["#7a5a3a","#f4e4b8","#8a6b4a","#e9d36b"],["#c0392b","#f4e4b8","#6b2d5c","#e8a0a0"]];
  function ler(k, def) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } }
  function gravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var STATUS = ["novo", "preparando", "pronto", "entregue"];
  return {
    STATUS: STATUS,
    CHAVES: [KD, KP, KC],
    dados: function () {
      var base = window.CARDAPIO, o = ler(KD, {});
      var itens = base.itens.concat(ler(KC, [])).map(function (i) { return Object.assign({}, i, o[i.id] || {}); });
      return Object.assign({}, base, { itens: itens });
    },
    novoItem: function (it) {
      var l = ler(KC, []);
      it.id = l.reduce(function (m, x) { return Math.max(m, x.id); }, 1000) + 1;
      it.bebida = it.cat === "bebidas"; it.custom = true;
      if (!it.bebida) it.cores = PALETAS[l.length % PALETAS.length];
      l.push(it); gravar(KC, l); return it;
    },
    removerItem: function (id) { gravar(KC, ler(KC, []).filter(function (x) { return x.id !== id; })); },
    salvarItem: function (id, patch) { var o = ler(KD, {}); o[id] = Object.assign(o[id] || {}, patch); gravar(KD, o); },
    resetarCardapio: function () { try { localStorage.removeItem(KD); localStorage.removeItem(KC); } catch (e) {} },
    pedidos: function () { return ler(KP, []); },
    novoPedido: function (p) {
      var l = ler(KP, []);
      p.id = l.length ? l[l.length - 1].id + 1 : 1;
      p.status = "novo"; p.hora = new Date().toISOString();
      l.push(p); gravar(KP, l); return p;
    },
    pedido: function (id) { return ler(KP, []).filter(function (p) { return p.id === id; })[0]; },
    mudarStatus: function (id, s) { var l = ler(KP, []); l.forEach(function (p) { if (p.id === id) p.status = s; }); gravar(KP, l); },
    limparPedidos: function () { try { localStorage.removeItem(KP); } catch (e) {} },
    aoMudar: function (fn) { window.addEventListener("storage", function (e) { if (!e.key || e.key === KD || e.key === KC || e.key === KP) fn(e.key === KP ? "pedidos" : "dados"); }); }
  };
})();
