/**
 * Configuração de analytics.
 *
 * Troque os IDs abaixo pelos seus. Se não usar um dos dois, apague o bloco
 * correspondente neste arquivo E o snippet correspondente no <head> de
 * cada página HTML (index.html e produto.html).
 */
window.GTM_ID = "GTM-XXXXXXX";      // Google Tag Manager
window.GA_ID = "G-XXXXXXXXXX";      // Google Analytics 4 / gtag.js (ou AW-XXXXXXXXX para Google Ads)

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
window.gtag = window.gtag || gtag;
if (window.GA_ID && !window.GA_ID.includes("XXXX")) {
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
