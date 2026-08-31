# Vitrine + páginas de produto (GitHub Pages)

Site 100% estático (HTML/CSS/JS puro, sem build) pronto para o GitHub Pages.

## Estrutura

```
index.html               → vitrine com todos os produtos (grid)
produto.html              → página de um único produto (imagem/vídeo + botão)
assets/js/products.js     → catálogo de produtos (ÚNICO arquivo que você edita para add/remover produtos)
assets/js/analytics.js    → configuração do GTM / gtag.js e o evento de clique
assets/css/style.css      → estilo visual das duas páginas
assets/img/               → coloque aqui as imagens/vídeos dos produtos
```

A vitrine e a página de produto usam exatamente o mesmo componente visual
(mídia + nome + preço opcional + botão "Ver na Shopee"), lendo os dados do
mesmo arquivo `products.js` — então elas nunca ficam fora de sincronia.

## 1. Como adicionar/editar produtos

Abra `assets/js/products.js` e edite o array `window.PRODUTOS`. Cada produto:

```js
{
  id: "meu-produto",                                 // usado na URL: produto.html?id=meu-produto
  nome: "Nome do produto",
  preco: "R$ 99,90",                                 // ou "" para esconder
  midia: { tipo: "imagem", src: "assets/img/foto.jpg" },
  // ou: midia: { tipo: "video", src: "assets/img/video.mp4" },
  shopeeUrl: "https://shopee.com.br/product/..."
}
```

Coloque o arquivo de imagem/vídeo em `assets/img/`. Não existe limite de
quantidade — a vitrine se ajusta automaticamente a N produtos.

## 2. Configurar Google Tag Manager e o pixel do Google (gtag.js)

Em `assets/js/analytics.js`, troque:

```js
window.GTM_ID = "GTM-XXXXXXX";   // seu container do Tag Manager
window.GA_ID  = "G-XXXXXXXXXX";  // seu ID do GA4 (ou "AW-XXXXXXXXX" para Google Ads)
```

Depois troque os **mesmos** IDs nos dois lugares em que aparecem, dentro de
`index.html` e `produto.html`:
- na URL do script `googletagmanager.com/gtag/js?id=...`
- no snippet do GTM (`'GTM-XXXXXXX'`)
- no `<iframe>` do `<noscript>` do GTM

Se você só for usar um dos dois (só GTM, ou só gtag.js), pode remover o
snippet do outro nas duas páginas.

Toda vez que alguém clica em "Ver na Shopee" (na vitrine ou na página de
produto), o site:
1. dá um `push` no `dataLayer` com o evento `ver_na_shopee` (para você criar
   um gatilho/tag correspondente dentro do próprio GTM), e
2. dispara um evento `ver_na_shopee` via `gtag`, caso GA4/Google Ads esteja
   configurado.

Isso te dá o clique de saída para a Shopee como evento de conversão em
ambas as ferramentas.

## 3. Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie esta pasta para a branch `main`.
2. No repositório, vá em **Settings → Pages**.
3. Em "Build and deployment", selecione **Deploy from a branch**, branch
   `main`, pasta `/ (root)`.
4. Salve. Em alguns minutos o site fica disponível em
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Observação sobre SEO por produto

Como as páginas são geradas no navegador a partir de `products.js`, o link
`produto.html?id=X` funciona perfeitamente para compartilhar e para os
usuários, mas o HTML que os crawlers veem antes do JavaScript rodar não
inclui o nome/imagem do produto específico (só depois de executado o
script). Para a maioria dos casos de uso (link direto no vídeo, bio, anúncio)
isso não é problema. Se no futuro você precisar de uma página HTML própria
por produto para SEO/rich previews, dá para gerar isso com um pequeno script
de build — me avise se quiser que eu monte essa etapa.
