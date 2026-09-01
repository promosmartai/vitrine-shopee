/**
 * Único papel deste arquivo: avisar o Google Tag Manager quando alguém
 * clica em "Ver na Shopee". Ele NÃO monta nenhuma parte da página —
 * todo o HTML de cada produto fica escrito nos próprios arquivos .html.
 *
 * Uso no botão: onclick="trackShopeeClick('id-do-produto', 'Nome do produto')"
 */
window.dataLayer = window.dataLayer || [];

function trackShopeeClick(produtoId, produtoNome) {
  window.dataLayer.push({
    event: "ver_na_shopee",
    produto_id: produtoId,
    produto_nome: produtoNome
  });
  if (typeof window.gtag === "function") {
    window.gtag("event", "ver_na_shopee", {
      item_id: produtoId,
      item_name: produtoNome
    });
  }
}
