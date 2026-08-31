/**
 * Configuração de analytics.
 *
 * Troque os IDs abaixo pelos seus. Se não usar um dos dois, apague o bloco
 * correspondente neste arquivo E o snippet correspondente no <head> de
 * cada página HTML (index.html e produto.html).
 */
window.GTM_ID = "GTM-53NDKLK9";      // Google Tag Manager
window.GA_ID = "G-RRVXPHC8N2";      // Google Analytics 4 / gtag.js (ou AW-XXXXXXXXX para Google Ads)

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
window.gtag = window.gtag || gtag;

// Injeta o Google Tag Manager usando o GTM_ID definido acima.
// Esta é a única linha que precisa do ID do GTM — não edite o HTML.
if (window.GTM_ID && !window.GTM_ID.includes("XXXX")) {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", window.GTM_ID);
}

// Injeta o gtag.js (GA4 / Google Ads) usando o GA_ID definido acima.
if (window.GA_ID && !window.GA_ID.includes("XXXX")) {
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + window.GA_ID;
  document.head.appendChild(gtagScript);

  gtag("js", new Date());
  gtag("config", window.GA_ID);
}

/**
 * Dispara um evento quando o botão "Ver na Shopee" é clicado.
 * Envia tanto para o dataLayer (para usar em uma tag do GTM)
 * quanto direto via gtag (caso GA/Ads estejam configurados aqui).
 */
function trackShopeeClick(produto) {
  window.dataLayer.push({
    event: "ver_na_shopee",
    produto_id: produto.id,
    produto_nome: produto.nome
  });
  if (typeof window.gtag === "function") {
    window.gtag("event", "ver_na_shopee", {
      item_id: produto.id,
      item_name: produto.nome
    });
  }
}
