/**
 * Catálogo de produtos.
 *
 * Para adicionar um produto novo, copie um bloco e ajuste os campos.
 * Para remover, apague o bloco inteiro.
 *
 * Campos:
 *  - id:        identificador único, usado na URL (produto.html?id=SEU_ID)
 *  - nome:      nome do produto
 *  - preco:     texto livre, ex: "R$ 49,90" (deixe "" para esconder)
 *  - midia:     { tipo: "imagem" | "video", src: "caminho ou URL" }
 *               "video" espera um arquivo .mp4 (ou webm) tocado inline, sem som, em loop.
 *  - shopeeUrl: link completo do produto na Shopee
 */
window.PRODUTOS = [
  {
    id: "fogareiro-portatil",
    nome: "Fogareiro Portátil a Gás",
    preco: "R$ 89,90",
    midia: { tipo: "imagem", src: "assets/img/produto-1.jpg" },
    shopeeUrl: "https://shopee.com.br/product/000000/000000001"
  },
  {
    id: "lanterna-recarregavel",
    nome: "Lanterna Tática Recarregável",
    preco: "R$ 54,90",
    midia: { tipo: "imagem", src: "assets/img/produto-2.jpg" },
    shopeeUrl: "https://shopee.com.br/product/000000/000000002"
  },
  {
    id: "faca-multiuso",
    nome: "Faca Multiuso de Sobrevivência",
    preco: "R$ 39,90",
    midia: { tipo: "video", src: "assets/img/produto-3.mp4" },
    shopeeUrl: "https://shopee.com.br/product/000000/000000003"
  },
  {
    id: "mochila-tatica",
    nome: "Mochila Tática 40L",
    preco: "R$ 149,90",
    midia: { tipo: "imagem", src: "assets/img/produto-4.jpg" },
    shopeeUrl: "https://shopee.com.br/product/000000/000000004"
  }
];
