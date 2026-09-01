# Vitrine + páginas de produto (Bootstrap, HTML puro)

Site 100% estático com Bootstrap 5 (via CDN). Cada página é HTML normal —
não tem nenhuma parte montada por JavaScript. Editar é abrir o arquivo,
trocar o texto/imagem/link e salvar.

## Estrutura

```
index.html                          → vitrine (todos os cards escritos direto no HTML)
produto-fogareiro-portatil.html     → página de um produto (exemplo)
produto-lanterna-recarregavel.html  → página de um produto (exemplo)
produto-faca-multiuso.html          → página de um produto (exemplo, com vídeo)
produto-mochila-tatica.html         → página de um produto (exemplo)
assets/css/style.css                → cor de marca e ajustes visuais sobre o Bootstrap
assets/js/track.js                  → só avisa o GTM quando alguém clica no botão (não monta nada visual)
assets/img/                         → imagens/vídeos dos produtos
```

Os 4 arquivos `produto-*.html` são **exemplos/templates**. Renomeie, edite
ou apague conforme seus produtos reais.

## 1. Como editar um produto existente

Abra o arquivo `produto-nome-do-produto.html` e troque diretamente no HTML:
- `src="assets/img/..."` → o arquivo de imagem ou vídeo
- o texto dentro de `<h1>` → o nome do produto
- o texto dentro de `<p class="preco...">` → o preço
- o `href="https://shopee.com.br/..."` do botão → o link real da Shopee
- os dois valores dentro de `onclick="trackShopeeClick('slug', 'Nome')"` →
  mantenha atualizados (são só o identificador e o nome usados no relatório
  do GTM/GA4, não aparecem na tela)

Depois abra `index.html` e faça a mesma troca no card correspondente (a
vitrine é uma página separada, então o nome/preço/imagem/link precisam ser
editados nas duas páginas).

## 2. Como adicionar um produto novo

**Na vitrine (`index.html`):** copie um bloco inteiro, do
`<div class="col-6 col-md-4 col-lg-3">` até o `</div>` que fecha esse mesmo
card, cole depois do último produto, e edite os campos citados acima.
Há um comentário no próprio arquivo marcando onde os cards começam.

**Página do produto:** copie um dos arquivos `produto-*.html` existentes,
renomeie (ex: `produto-meu-produto-novo.html`) e edite o conteúdo.

Coloque a imagem/vídeo em `assets/img/`. Não existe limite de produtos —
é só continuar copiando o padrão.

## 3. Google Tag Manager e Google Analytics (gtag.js)

Os dois já estão configurados e funcionando, com os IDs:
- GTM: `GTM-53NDKLK9`
- GA4: `G-RRVXPHC8N2`

Esses IDs aparecem soltos (sem variável) dentro do `<head>` de **cada**
página HTML — é assim que o Google exige que o snippet funcione. Se um dia
precisar trocar de conta/ID, use "localizar e substituir" no editor de
código pra trocar em todos os arquivos de uma vez.

O clique em "Ver na Shopee" dispara o evento `ver_na_shopee` (via
`assets/js/track.js`), com o id e o nome do produto — já configurado como
gatilho no GTM.

## 4. Publicar no GitHub Pages

1. Envie esta pasta (o conteúdo dela, não a pasta em si) para a branch
   `main` do seu repositório.
2. Em **Settings → Pages**, "Deploy from a branch", branch `main`, pasta
   `/ (root)`, Save.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Por que ainda existe um arquivo .js?

Só o clique no botão "Ver na Shopee" precisa avisar o Google Tag Manager —
isso não dá pra fazer em HTML puro. Mas ele não decide o que aparece na
tela: todo nome, preço, imagem e link de cada produto está escrito direto
no HTML de cada página, então editar continua sendo só abrir o arquivo e
trocar o texto.
