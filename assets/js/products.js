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
    id: "processador-triturador-manual",
    nome: "Processador Triturador Manual de Alimentos Alho Legumes Frutas 500ml – 3 Lâminas Portátil",
    preco: "R$ 15,99",
    midia: { tipo: "imagem", src: "assets/img/produto-1.jpg" },
    shopeeUrl: "https://shopee.com.br/product/1373441778/18699880918?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMCDZ1QISG3Y9eQ8yPVgAOiad7g2PqyaqkWO_9nGG8rv2GeSvTKVy0YH9Uq_tAMSkaB8ROm0FmD1_y4Fc6qmNpcGhlcnRleHTEmQAAAAzzwMGb36wC7qK8LvpDkz6MiRV-MnyZKkrIwFdgmPoCHDvbc40gRct7KBBa8V-qXEQnqt7NXAquUFZ1xKjvxDQ2SqZP6ETA2dO8JxKJ2Y1EpEUh_ORdSnGAF7QQ-aRpWXuv2yqD6TTcjcn_KksFUlvaY66Y5el-He9_-m3AvKh3-6jP6mjHzBM-Ni1GsUJOaf26ln01rg&lang=pt-BR&mmp_pid=an_18362921219&uls_trackid=56h9db7q01a3&utm_campaign=id_8IFX3lfJ3Ar&utm_content=----&utm_medium=affiliates&utm_source=an_18362921219&utm_term=fgiavpnarekg"
  }
];
