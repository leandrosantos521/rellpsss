# Reipps Cosméticos — site

## Arquivos
- `index.html` — página principal.
- `vendas.html` — página de vendas com seleção de variações.
- `style.css` — identidade visual responsiva.
- `app.js` — catálogo, filtros, variações, carrinho e WhatsApp.
- `assets/logo.png` — logo enviada pela loja.

## Como alterar produtos
Abra `app.js` e procure `const products = [...]`.
Cada produto tem:
- `brand`: marca
- `name`: nome
- `price`: preço inicial
- `desc`: descrição
- `variations.options`: opções e preços
- `sizeOptions`: tamanhos com acréscimo de preço

Exemplo do Top Coat Fofineo:
- Tradicional = R$ 53,90
- Glitter Fofineo = R$ 57,90
- Crystal = R$ 53,90

## Como colocar o WhatsApp
No começo do `app.js`, altere:
`whatsapp: "5500000000000"`
para o número real, no formato `55DDDNUMERO`, sem espaços, parênteses ou hífen.

Exemplo fictício: `5511999999999`

## Como abrir
Extraia a pasta e abra `index.html` no navegador. Para publicar, envie os arquivos para qualquer hospedagem de site estático.
