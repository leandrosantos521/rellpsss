const STORE = {
  name: "Relpps Cosméticos",

  // =========================================================
  // WHATSAPP DA LOJA
  // =========================================================
  whatsapp: "556199649-8557",

  currency: "BRL"
};


/* =========================================================
   CONFIGURAÇÕES DA ENTREGA
   ========================================================= */

const DELIVERY = {

  // PEDIDO MÍNIMO PARA ENTREGA
  minimumOrder: 50.00,

  // TAXA DE ENTREGA
  fee: 0,

  // A TAXA SERÁ COMBINADA COM A LOJA
  feeText: "Taxa de entrega a combinar com a loja"

};


/* =========================================================
   PRODUTOS
   ========================================================= */

const products = [

  // =========================================================
  // UNHAS
  // =========================================================

  {
    id:1,
    cat:"unhas",
    brand:"Uze Nails",
    name:"Top Coat Fofineo",
    desc:"Top coat com acabamento brilhante e efeito delicado.",
    price:53.90,
    art:"💅",
    variations:{
      label:"Efeito / Cor",
      options:[
        ["Tradicional",53.90],
        ["Glitter Fofineo",57.90],
        ["Crystal",53.90]
      ]
    }
  },

  {
    id:2,
    cat:"unhas",
    brand:"Uze Nails",
    name:"Base Gel Premium",
    desc:"Base de alta aderência para alongamentos e esmaltação.",
    price:49.90,
    art:"✨",
    variations:{
      label:"Tamanho",
      options:[
        ["10g",49.90],
        ["30g",89.90]
      ]
    }
  },

  {
    id:3,
    cat:"unhas",
    brand:"Bad Pink",
    name:"Gel Pink Builder",
    desc:"Gel construtor para estrutura e acabamento profissional.",
    price:69.90,
    art:"🌸",
    variations:{
      label:"Cor",
      options:[
        ["Cover Pink",69.90],
        ["Baby Pink",69.90],
        ["Milky Pink",74.90]
      ]
    }
  },

  {
    id:4,
    cat:"unhas",
    brand:"Fadvan",
    name:"Fibra de Vidro",
    desc:"Fibras para alongamento e reforço de unhas.",
    price:32.90,
    art:"🧵",
    variations:{
      label:"Tamanho",
      options:[
        ["Curta",32.90],
        ["Longa",39.90]
      ]
    }
  },

  {
    id:5,
    cat:"unhas",
    brand:"Bluve",
    name:"Esmalte em Gel Nude",
    desc:"Cor elegante com alta pigmentação.",
    price:29.90,
    art:"🎨",
    variations:{
      label:"Cor",
      options:[
        ["Nude",29.90],
        ["Rosé",29.90],
        ["Cappuccino",31.90],
        ["Cherry",31.90]
      ]
    }
  },

  {
    id:6,
    cat:"unhas",
    brand:"Cuccio",
    name:"Esmalte Gel Luxury",
    desc:"Esmalte profissional de longa duração.",
    price:39.90,
    art:"💎",
    variations:{
      label:"Cor",
      options:[
        ["Red Velvet",39.90],
        ["Champagne",42.90],
        ["Black",39.90]
      ]
    }
  },

  {
    id:7,
    cat:"unhas",
    brand:"Cherry",
    name:"Preparador Nail Prep",
    desc:"Preparador para melhor aderência do procedimento.",
    price:24.90,
    art:"🧴",
    variations:{
      label:"Volume",
      options:[
        ["15ml",24.90],
        ["30ml",39.90]
      ]
    }
  },

  {
    id:8,
    cat:"unhas",
    brand:"Beautify",
    name:"Primer Sem Ácido",
    desc:"Primer profissional para preparação das unhas.",
    price:27.90,
    art:"✨",
    variations:{
      label:"Volume",
      options:[
        ["10ml",27.90],
        ["15ml",32.90]
      ]
    }
  },

  {
    id:9,
    cat:"unhas",
    brand:"Elite Premium",
    name:"Gel Clear Crystal",
    desc:"Gel transparente para construção e encapsulamento.",
    price:79.90,
    art:"💠",
    variations:{
      label:"Peso",
      options:[
        ["30g",79.90],
        ["50g",119.90]
      ]
    }
  },

  {
    id:10,
    cat:"unhas",
    brand:"Sky Rose",
    name:"Glitter Rose Gold",
    desc:"Glitter fino para nail art e encapsulamento.",
    price:19.90,
    art:"✨",
    variations:{
      label:"Tamanho",
      options:[
        ["Pote 3g",19.90],
        ["Pote 8g",34.90]
      ]
    }
  },

  {
    id:11,
    cat:"unhas",
    brand:"Clione",
    name:"Esmalte Gel Cat Eye",
    desc:"Efeito magnético sofisticado.",
    price:44.90,
    art:"🪄",
    variations:{
      label:"Cor",
      options:[
        ["Gold",44.90],
        ["Rose",44.90],
        ["Purple",46.90],
        ["Green",46.90]
      ]
    }
  },

  {
    id:12,
    cat:"unhas",
    brand:"Master",
    name:"Lixa Elétrica Refil",
    desc:"Refil para broca e acabamento profissional.",
    price:14.90,
    art:"⚙️",
    variations:{
      label:"Granulação",
      options:[
        ["Fina",14.90],
        ["Média",14.90],
        ["Grossa",16.90]
      ]
    }
  },


  // =========================================================
  // SOBRANCELHAS
  // =========================================================

  {
    id:13,
    cat:"sobrancelhas",
    brand:"Beautify",
    name:"Henna Professional",
    desc:"Henna para design de sobrancelhas.",
    price:34.90,
    art:"🤎",
    variations:{
      label:"Cor",
      options:[
        ["Castanho Claro",34.90],
        ["Castanho Médio",34.90],
        ["Castanho Escuro",36.90],
        ["Preto",36.90]
      ]
    }
  },

  {
    id:14,
    cat:"sobrancelhas",
    brand:"Fadvan",
    name:"Linha para Design",
    desc:"Linha profissional para marcação e design.",
    price:18.90,
    art:"🧵",
    variations:{
      label:"Cor",
      options:[
        ["Branca",18.90],
        ["Preta",18.90]
      ]
    }
  },

  {
    id:15,
    cat:"sobrancelhas",
    brand:"Cherry",
    name:"Paquímetro Brow",
    desc:"Ferramenta para mapeamento preciso.",
    price:39.90,
    art:"📏",
    variations:{
      label:"Modelo",
      options:[
        ["Tradicional",39.90],
        ["Premium",49.90]
      ]
    }
  },

  {
    id:16,
    cat:"sobrancelhas",
    brand:"Elite Premium",
    name:"Pasta para Mapeamento",
    desc:"Pasta cremosa para marcação de sobrancelhas.",
    price:29.90,
    art:"🤍",
    variations:{
      label:"Cor",
      options:[
        ["Branca",29.90],
        ["Caramelo",32.90]
      ]
    }
  },

  {
    id:17,
    cat:"sobrancelhas",
    brand:"Bad Pink",
    name:"Gel Fixador Brow",
    desc:"Fixa os fios e deixa acabamento natural.",
    price:31.90,
    art:"✨",
    variations:{
      label:"Acabamento",
      options:[
        ["Natural",31.90],
        ["Extra Fixação",36.90]
      ]
    }
  },

  {
    id:18,
    cat:"sobrancelhas",
    brand:"Repos",
    name:"Pinça Precision",
    desc:"Pinça para remoção e definição de fios.",
    price:22.90,
    art:"✂️",
    variations:{
      label:"Modelo",
      options:[
        ["Ponta Reta",22.90],
        ["Ponta Diagonal",24.90],
        ["Ponta Fina",24.90]
      ]
    }
  },


  // =========================================================
  // CÍLIOS
  // =========================================================

  {
    id:19,
    cat:"cilios",
    brand:"Fadvan",
    name:"Cílios Volume Brasileiro",
    desc:"Fios leves para volume e acabamento marcante.",
    price:46.90,
    art:"👁️",
    variations:{
      label:"Curvatura",
      options:[
        ["C",46.90],
        ["CC",48.90],
        ["D",49.90]
      ],
      sizeLabel:"Tamanho",
      sizeOptions:[
        ["8-10mm",0],
        ["10-12mm",2],
        ["12-14mm",4]
      ]
    }
  },

  {
    id:20,
    cat:"cilios",
    brand:"Uze Nails",
    name:"Cílios Fio a Fio Premium",
    desc:"Fios individuais para efeito natural.",
    price:39.90,
    art:"👁️",
    variations:{
      label:"Espessura",
      options:[
        ["0.07",39.90],
        ["0.10",41.90],
        ["0.12",43.90]
      ],
      sizeLabel:"Tamanho",
      sizeOptions:[
        ["8mm",0],
        ["10mm",1],
        ["12mm",2],
        ["14mm",3]
      ]
    }
  },

  {
    id:21,
    cat:"cilios",
    brand:"Sky Rose",
    name:"Cílios Mega Volume",
    desc:"Fios para efeitos intensos e glamourosos.",
    price:54.90,
    art:"🖤",
    variations:{
      label:"Curvatura",
      options:[
        ["D",54.90],
        ["L",57.90],
        ["M",57.90]
      ],
      sizeLabel:"Tamanho",
      sizeOptions:[
        ["10-12mm",0],
        ["12-14mm",3],
        ["14-16mm",5]
      ]
    }
  },

  {
    id:22,
    cat:"cilios",
    brand:"Clione",
    name:"Cílios Wispy",
    desc:"Efeito delicado e sofisticado.",
    price:42.90,
    art:"👁️",
    variations:{
      label:"Estilo",
      options:[
        ["Natural",42.90],
        ["Dramático",47.90]
      ],
      sizeLabel:"Tamanho",
      sizeOptions:[
        ["10mm",0],
        ["12mm",2],
        ["14mm",3]
      ]
    }
  },

  {
    id:23,
    cat:"cilios",
    brand:"Master",
    name:"Cola para Extensão",
    desc:"Adesivo profissional de secagem rápida.",
    price:79.90,
    art:"🖤",
    variations:{
      label:"Secagem",
      options:[
        ["1s",79.90],
        ["2s",74.90],
        ["3s",69.90]
      ]
    }
  },

  {
    id:24,
    cat:"cilios",
    brand:"Beautify",
    name:"Removedor Gel",
    desc:"Removedor para extensão de cílios.",
    price:35.90,
    art:"🧴",
    variations:{
      label:"Volume",
      options:[
        ["5g",35.90],
        ["15g",59.90]
      ]
    }
  },


  // =========================================================
  // EQUIPAMENTOS
  // =========================================================

  {
    id:25,
    cat:"equipamentos",
    brand:"Repos",
    name:"Pinça Curva Profissional",
    desc:"Pinça premium para aplicação de cílios.",
    price:34.90,
    art:"🔧",
    variations:{
      label:"Modelo",
      options:[
        ["Curva",34.90],
        ["L",39.90],
        ["Volume",39.90]
      ]
    }
  },

  {
    id:26,
    cat:"equipamentos",
    brand:"Elite Premium",
    name:"Luminária LED Beauty",
    desc:"Iluminação para atendimento e conteúdo.",
    price:189.90,
    art:"💡",
    variations:{
      label:"Tamanho",
      options:[
        ['12"',189.90],
        ['18"',279.90],
        ['26"',399.90]
      ]
    }
  },

  {
    id:27,
    cat:"equipamentos",
    brand:"Master",
    name:"Micromotor Nail Pro",
    desc:"Micromotor para manicure e pedicure.",
    price:289.90,
    art:"⚙️",
    variations:{
      label:"Potência",
      options:[
        ["Básico",289.90],
        ["Pro",359.90]
      ]
    }
  },

  {
    id:28,
    cat:"equipamentos",
    brand:"Cuccio",
    name:"Cabine LED/UV",
    desc:"Cabine para cura de esmaltes e géis.",
    price:159.90,
    art:"💡",
    variations:{
      label:"Potência",
      options:[
        ["48W",159.90],
        ["72W",199.90]
      ]
    }
  },

  {
    id:29,
    cat:"equipamentos",
    brand:"Bad Pink",
    name:"Alicate Cutícula Pro",
    desc:"Alicate profissional para cutículas.",
    price:69.90,
    art:"✂️",
    variations:{
      label:"Tamanho",
      options:[
        ['5"',69.90],
        ['6"',74.90]
      ]
    }
  },

  {
    id:30,
    cat:"equipamentos",
    brand:"Fadvan",
    name:"Organizador Acrílico",
    desc:"Organização elegante para bancada.",
    price:89.90,
    art:"🗂️",
    variations:{
      label:"Modelo",
      options:[
        ["6 divisórias",89.90],
        ["12 divisórias",129.90]
      ]
    }
  },

  {
    id:31,
    cat:"equipamentos",
    brand:"Uze Nails",
    name:"Pincel Nail Art",
    desc:"Pincéis para detalhes e decoração.",
    price:18.90,
    art:"🖌️",
    variations:{
      label:"Ponta",
      options:[
        ["Fina",18.90],
        ["Chanfrada",19.90],
        ["Detalhe",21.90]
      ]
    }
  },

  {
    id:32,
    cat:"equipamentos",
    brand:"Repos",
    name:"Kit Profissional Manicure",
    desc:"Kit para montar ou renovar sua bancada.",
    price:219.90,
    art:"🧰",
    variations:{
      label:"Kit",
      options:[
        ["Essencial",219.90],
        ["Completo",329.90]
      ]
    }
  }

];


/* =========================================================
   SISTEMA
   ========================================================= */

let cart =
  JSON.parse(
    localStorage.getItem("relpps_cart") || "[]"
  );

let currentProduct = null;
let currentCategory = "todos";


/* =========================================================
   CONFIGURAÇÃO DOS DESCONTOS
   ========================================================= */

const DISCOUNT = {

  // DESCONTO A PARTIR DE R$ 100
  minimum: 100.00,

  // PRODUTOS NORMAIS
  normalPercent: 5,

  // COLAS
  colaPercent: 3

};


/* =========================================================
   FORMATAÇÃO
   ========================================================= */

const money = v =>
  Number(v).toLocaleString("pt-BR", {
    style:"currency",
    currency:"BRL"
  });


/* =========================================================
   SALVAR CARRINHO
   ========================================================= */

function saveCart(){

  localStorage.setItem(
    "repps_cart",
    JSON.stringify(cart)
  );

  updateCartUI();

}


/* =========================================================
   TOTAL DOS PRODUTOS
   ========================================================= */

function totalCart(){

  return cart.reduce(
    (s,i) =>
      s + (Number(i.price) * Number(i.qty)),
    0
  );

}


/* =========================================================
   VERIFICA SE É COLA
   ========================================================= */

function isCola(item){

  return (
    item &&
    item.name &&
    item.name
      .toLowerCase()
      .includes("cola")
  );

}


/* =========================================================
   CALCULAR DESCONTO
   ========================================================= */

function paymentDiscount(payment){

  const subtotal = totalCart();

  if(subtotal <= DISCOUNT.minimum){
    return 0;
  }

  if(payment === "cartao"){
    return 0;
  }

  if(
    payment !== "pix" &&
    payment !== "dinheiro"
  ){
    return 0;
  }

  let discount = 0;

  cart.forEach(item => {

    const itemTotal =
      Number(item.price) * Number(item.qty);

    if(isCola(item)){

      discount +=
        itemTotal *
        (DISCOUNT.colaPercent / 100);

    }else{

      discount +=
        itemTotal *
        (DISCOUNT.normalPercent / 100);

    }

  });

  return discount;

}


/* =========================================================
   TOTAL COM PAGAMENTO
   ========================================================= */

function totalWithPayment(payment){

  const subtotal =
    totalCart();

  const discount =
    paymentDiscount(payment);

  return subtotal - discount;

}


/* =========================================================
   PRODUTOS
   ========================================================= */

function renderProducts(){

  const grid =
    document.querySelector("#productGrid");

  if(!grid) return;

  const search =
    (
      document.querySelector("#search")
        ?.value || ""
    ).toLowerCase();

  const brand =
    document.querySelector("#brandFilter")
      ?.value || "todas";

  let list =
    products.filter(
      p =>
        currentCategory === "todos" ||
        p.cat === currentCategory
    );

  if(search){

    list =
      list.filter(
        p =>
          `${p.brand} ${p.name} ${p.desc}`
            .toLowerCase()
            .includes(search)
      );

  }

  if(brand !== "todas"){

    list =
      list.filter(
        p => p.brand === brand
      );

  }

  grid.innerHTML =
    list.length
      ? list.map(productCard).join("")
      : `
        <div class="empty">
          Nenhum produto encontrado.<br>
          Tente outra busca.
        </div>
      `;

}


/* =========================================================
   CARD DO PRODUTO
   ========================================================= */

function productCard(p){

  const category =
    p.cat === "unhas"
      ? "Unhas"
      : p.cat === "sobrancelhas"
        ? "Brows"
        : p.cat === "cilios"
          ? "Lashes"
          : "Pro";

  return `

    <article
      class="product-card"
      onclick="openProduct(${p.id})">

      <div class="product-visual">

        <span class="sale">
          ${category}
        </span>

        <div class="product-art">
          ${p.art}
        </div>

      </div>

      <div class="product-info">

        <div class="brand">
          ${p.brand}
        </div>

        <div class="product-name">
          ${p.name}
        </div>

        <div class="product-meta">
          ${p.desc}
        </div>

        <div class="price-row">

          <div class="price">
            ${money(p.price)}
          </div>

          <button
            class="add"
            onclick="
              event.stopPropagation();
              openProduct(${p.id})
            ">
            +
          </button>

        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   MARCAS
   ========================================================= */

function brands(){

  return [
    ...new Set(
      products.map(p => p.brand)
    )
  ].sort();

}


/* =========================================================
   FILTROS
   ========================================================= */

function setupFilters(){

  document
    .querySelector("#categoryFilters")
    ?.addEventListener(
      "click",
      e => {

        const btn =
          e.target.closest("[data-cat]");

        if(!btn) return;

        currentCategory =
          btn.dataset.cat;

        document
          .querySelectorAll("[data-cat]")
          .forEach(
            b => b.classList.remove("active")
          );

        btn.classList.add("active");

        renderProducts();

      }
    );

  document
    .querySelector("#search")
    ?.addEventListener(
      "input",
      renderProducts
    );

  document
    .querySelector("#brandFilter")
    ?.addEventListener(
      "change",
      renderProducts
    );

  const bf =
    document.querySelector("#brandFilter");

  if(bf){

    bf.innerHTML =
      `<option value="todas">
        Todas as marcas
      </option>` +

      brands()
        .map(
          b => `
            <option value="${b}">
              ${b}
            </option>
          `
        )
        .join("");

  }

}


/* =========================================================
   ABRIR PRODUTO
   ========================================================= */

function openProduct(id){

  const p =
    products.find(
      x => x.id === id
    );

  if(!p) return;

  currentProduct = p;

  const modal =
    document.querySelector("#productModal");

  if(!modal) return;

  document
    .querySelector("#modalArt")
    .textContent = p.art;

  document
    .querySelector("#modalBrand")
    .textContent = p.brand;

  document
    .querySelector("#modalName")
    .textContent = p.name;

  document
    .querySelector("#modalDesc")
    .textContent = p.desc;

  const opts =
    p.variations?.options || [];

  document
    .querySelector("#variationBox")
    .innerHTML =
      opts.length
        ? `

          <div class="option">

            <label>
              ${p.variations.label}
            </label>

            <div class="option-row">

              ${opts.map(
                (o, i) => `

                  <button
                    class="option-btn ${
                      i === 0
                        ? "active"
                        : ""
                    }"
                    data-price="${o[1]}"
                    data-value="${o[0]}"
                    onclick="chooseOption(this)">

                    ${o[0]}

                  </button>

                `
              ).join("")}

            </div>

          </div>

        `
        : "";

  if(p.variations?.sizeOptions){

    document
      .querySelector("#variationBox")
      .innerHTML += `

        <div class="option">

          <label>
            ${p.variations.sizeLabel}
          </label>

          <div class="option-row">

            ${
              p.variations.sizeOptions
                .map(
                  (o, i) => `

                    <button
                      class="option-btn size-btn ${
                        i === 0
                          ? "active"
                          : ""
                      }"
                      data-extra="${o[1]}"
                      data-value="${o[0]}"
                      onclick="chooseSize(this)">

                      ${o[0]}

                    </button>

                  `
                )
                .join("")
            }

          </div>

        </div>

      `;

  }

  modal.dataset.base =
    p.price;

  modal.dataset.extra =
    0;

  updateModalPrice();

  modal.classList.add("open");

  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   ESCOLHER VARIAÇÃO
   ========================================================= */

function chooseOption(btn){

  btn.parentElement
    .querySelectorAll(".option-btn")
    .forEach(
      x => x.classList.remove("active")
    );

  btn.classList.add("active");

  document
    .querySelector("#productModal")
    .dataset.base =
      btn.dataset.price;

  updateModalPrice();

}


/* =========================================================
   ESCOLHER TAMANHO
   ========================================================= */

function chooseSize(btn){

  btn.parentElement
    .querySelectorAll(".option-btn")
    .forEach(
      x => x.classList.remove("active")
    );

  btn.classList.add("active");

  document
    .querySelector("#productModal")
    .dataset.extra =
      btn.dataset.extra;

  updateModalPrice();

}


/* =========================================================
   ATUALIZAR PREÇO
   ========================================================= */

function updateModalPrice(){

  const m =
    document.querySelector("#productModal");

  if(!m || !currentProduct) return;

  const price =
    Number(
      m.dataset.base ||
      currentProduct.price
    ) +
    Number(
      m.dataset.extra || 0
    );

  const priceEl =
    document.querySelector("#modalPrice");

  if(priceEl){

    priceEl.textContent =
      money(price);

  }

}


/* =========================================================
   ADICIONAR À SACOLA
   ========================================================= */

function addCurrent(){

  if(!currentProduct) return;

  const m =
    document.querySelector("#productModal");

  const price =
    Number(
      m.dataset.base ||
      currentProduct.price
    ) +
    Number(
      m.dataset.extra || 0
    );

  const selected =
    [
      ...m.querySelectorAll(
        ".option-btn.active"
      )
    ]
      .map(
        x => x.dataset.value
      )
      .filter(Boolean)
      .join(" • ");

  const key =
    `${currentProduct.id}-${selected}`;

  const found =
    cart.find(
      i => i.key === key
    );

  if(found){

    found.qty++;

  }else{

    cart.push({

      key,

      id:
        currentProduct.id,

      name:
        currentProduct.name,

      brand:
        currentProduct.brand,

      art:
        currentProduct.art,

      price,

      variation:
        selected,

      qty:1

    });

  }

  saveCart();

  closeModal();

  toast(
    "Produto adicionado à sacola ✨"
  );

}


/* =========================================================
   CARRINHO
   ========================================================= */

function updateCartUI(){

  const count =
    cart.reduce(
      (s, i) => s + i.qty,
      0
    );

  document
    .querySelectorAll(".cart-count")
    .forEach(
      x => x.textContent = count
    );

  const body =
    document.querySelector("#cartBody");

  if(body){

    body.innerHTML =

      cart.length

        ? cart.map(
            (i, idx) => `

              <div class="cart-item">

                <div class="cart-thumb">
                  ${i.art}
                </div>

                <div>

                  <b>
                    ${i.name}
                  </b>

                  <div
                    style="
                      font-size:.72rem;
                      color:#7b7168;
                    ">

                    ${i.brand}

                    ${
                      i.variation
                        ? " • " + i.variation
                        : ""
                    }

                  </div>

                  <div class="qty">

                    <button
                      onclick="
                        changeQty(${idx},-1)
                      ">
                      −
                    </button>

                    <span>
                      ${i.qty}
                    </span>

                    <button
                      onclick="
                        changeQty(${idx},1)
                      ">
                      +
                    </button>

                  </div>

                </div>

                <strong>
                  ${money(
                    i.price * i.qty
                  )}
                </strong>

              </div>

            `
          ).join("")

        : `

          <div class="empty">

            Sua sacola está vazia.<br>

            Escolha seus favoritos 💅

          </div>

        `;

  }

  const total =
    document.querySelector("#cartTotal");

  if(total){

    total.textContent =
      money(totalCart());

  }

}


/* =========================================================
   QUANTIDADE
   ========================================================= */

function changeQty(i, d){

  if(!cart[i]) return;

  cart[i].qty += d;

  if(cart[i].qty <= 0){

    cart.splice(i,1);

  }

  saveCart();

}


/* =========================================================
   ABRIR SACOLA
   ========================================================= */

function openCart(){

  const drawer =
    document.querySelector("#drawer");

  if(!drawer) return;

  drawer.classList.add("open");

  document.body.style.overflow =
    "hidden";

  updateCartUI();

}


/* =========================================================
   FECHAR SACOLA
   ========================================================= */

function closeCart(){

  const drawer =
    document.querySelector("#drawer");

  if(drawer){

    drawer.classList.remove("open");

  }

  document.body.style.overflow =
    "";

}


/* =========================================================
   FECHAR PRODUTO
   ========================================================= */

function closeModal(){

  const modal =
    document.querySelector("#productModal");

  if(modal){

    modal.classList.remove("open");

  }

  document.body.style.overflow =
    "";

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkoutWhatsApp(){

  if(!cart.length){

    toast(
      "Adicione produtos antes de finalizar."
    );

    return;

  }

  let modal =
    document.querySelector(
      "#checkoutModal"
    );

  if(!modal){

    modal =
      document.createElement("div");

    modal.id =
      "checkoutModal";

    modal.innerHTML = `

      <div class="checkout-overlay">

        <div class="checkout-box">

          <button
            class="checkout-close"
            onclick="closeCheckout()">

            ×

          </button>

          <div class="checkout-header">

            <div class="checkout-icon">
              💕
            </div>

            <div>

              <h2>
                Finalizar pedido
              </h2>

              <p>
                Só mais alguns dados para enviar seu pedido.
              </p>

            </div>

          </div>

          <div class="checkout-fields">

            <label>

              Nome completo *

              <input
                id="checkoutName"
                type="text"
                placeholder="Digite seu nome"
                autocomplete="name">

            </label>

            <label>

              CPF *

              <input
                id="checkoutCPF"
                type="text"
                maxlength="14"
                placeholder="000.000.000-00">

            </label>

            <label>

              E-mail
              <small>(opcional)</small>

              <input
                id="checkoutEmail"
                type="email"
                placeholder="seuemail@email.com">

            </label>


            <!-- =================================================
                 FORMA DE RECEBIMENTO
                 ================================================= -->

            <div class="checkout-section-title">
              Como deseja receber?
            </div>

            <div class="checkout-types">

              <label class="checkout-type">

                <input
                  type="radio"
                  name="checkoutType"
                  value="retirada"
                  checked
                  onchange="changeCheckoutType()">

                <span>

                  🛍️

                  <strong>
                    Retirada presencial
                  </strong>

                  <small>
                    Retire diretamente com a loja
                  </small>

                </span>

              </label>


              <label class="checkout-type">

                <input
                  type="radio"
                  name="checkoutType"
                  value="entrega"
                  onchange="changeCheckoutType()">

                <span>

                  🚚

                  <strong>
                    Entrega
                  </strong>

                  <small>
                    A partir de R$ 50,00 • Taxa a combinar
                  </small>

                </span>

              </label>


              <label class="checkout-type">

                <input
                  type="radio"
                  name="checkoutType"
                  value="uber"
                  onchange="changeCheckoutType()">

                <span>

                  🛵

                  <strong>
                    Retirada via Uber
                  </strong>

                  <small>
                    Por conta do cliente
                  </small>

                </span>

              </label>

            </div>


            <!-- =================================================
                 PAGAMENTO
                 ================================================= -->

            <div class="checkout-section-title">

              Forma de pagamento

            </div>

            <div class="payment-options">

              <label class="payment-option">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="pix"
                  onchange="updatePaymentSelection()">

                <span>

                  <strong>
                    💚 Pix
                  </strong>

                  <small>
                    Pagamento via Pix
                  </small>

                </span>

              </label>


              <label class="payment-option">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="cartao"
                  onchange="updatePaymentSelection()">

                <span>

                  <strong>
                    💳 Cartão
                  </strong>

                  <small>
                    Crédito ou débito
                  </small>

                </span>

              </label>


              <label
                class="payment-option"
                id="cashPaymentOption">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="dinheiro"
                  onchange="updatePaymentSelection()">

                <span>

                  <strong>
                    💵 Dinheiro
                  </strong>

                  <small>
                    Somente retirada presencial
                  </small>

                </span>

              </label>

            </div>


            <!-- =================================================
                 AVISO DE DESCONTO
                 ================================================= -->

            <div
              id="discountBanner"
              class="discount-banner">

              🎁 <strong>
                Compras acima de R$ 100,00
              </strong>

              <br>

              Ganhe desconto pagando no
              <strong>Pix</strong> ou
              <strong>dinheiro</strong>.

            </div>


            <!-- =================================================
                 INFORMAÇÃO UBER
                 ================================================= -->

            <div
              id="checkoutUberInfo"
              style="display:none">

              <div class="checkout-delivery-info">

                🛵 <strong>Retirada via Uber</strong>

                <br><br>

                A entrega é por conta do cliente.

                <br><br>

                <strong>
                  Importante:
                </strong>

                após enviar o pedido, aguarde a
                <strong>confirmação da loja</strong>.
                Somente depois da confirmação,
                solicite o Uber para realizar a retirada.

              </div>

            </div>


            <!-- =================================================
                 INFORMAÇÃO ENTREGA
                 ================================================= -->

            <div
              id="checkoutDeliveryInfo"
              style="display:none">

              <div class="checkout-delivery-info">

                🚚 <strong>Entrega</strong>

                <br><br>

                Disponível para pedidos a partir de
                <strong>R$ 50,00</strong>.

                <br><br>

                A taxa de entrega será
                <strong>combinada diretamente com a loja</strong>.

                <br><br>

                Para entrega, o pagamento deve ser feito
                somente via <strong>Pix ou cartão</strong>.

              </div>

            </div>


            <!-- =================================================
                 ENDEREÇO
                 ================================================= -->

            <div
              id="checkoutAddressFields"
              style="display:none">

              <label>

                CEP *

                <input
                  id="checkoutCEP"
                  type="text"
                  maxlength="9"
                  placeholder="00000-000">

              </label>

              <label>

                Endereço *

                <input
                  id="checkoutAddress"
                  type="text"
                  placeholder="Rua, número, complemento">

              </label>

            </div>


            <label>

              Observações

              <textarea
                id="checkoutObs"
                placeholder="Alguma observação sobre seu pedido?"></textarea>

            </label>

          </div>


          <!-- =================================================
               RESUMO
               ================================================= -->

          <div class="checkout-resume">

            <div>

              <span>
                Produtos
              </span>

              <strong
                id="checkoutProducts">

                ${money(totalCart())}

              </strong>

            </div>


            <div
              id="checkoutDiscountRow"
              style="display:none">

              <span style="color:#3c8a55">

                🎁 Desconto

              </span>

              <strong
                id="checkoutDiscount"
                style="color:#3c8a55">

                -R$ 0,00

              </strong>

            </div>


            <div>

              <span>
                Recebimento
              </span>

              <strong
                id="checkoutDelivery">

                Retirada presencial

              </strong>

            </div>


            <div
              id="checkoutDeliveryFeeRow"
              style="display:none">

              <span>
                Entrega
              </span>

              <strong>
                A combinar
              </strong>

            </div>


            <div class="checkout-total-final">

              <span>
                Total dos produtos
              </span>

              <strong
                id="checkoutTotal">

                ${money(totalCart())}

              </strong>

            </div>

          </div>


          <div
            id="checkoutError"
            class="checkout-error">
          </div>


          <button
            class="btn btn-gold checkout-send"
            onclick="sendCheckoutWhatsApp()">

            Enviar pedido pelo WhatsApp 💬

          </button>

        </div>

      </div>

    `;

    document.body.appendChild(modal);

    addCheckoutModalStyles();

    setupCheckoutInputs();

  }

  modal.classList.add("open");

  document.body.style.overflow =
    "hidden";

  changeCheckoutType();

  updatePaymentSelection();

}


/* =========================================================
   ATUALIZAR FORMA DE PAGAMENTO
   ========================================================= */

function updatePaymentSelection(){

  const payment =
    document.querySelector(
      'input[name="paymentMethod"]:checked'
    )?.value || "";

  const type =
    document.querySelector(
      'input[name="checkoutType"]:checked'
    )?.value || "retirada";

  const discount =
    paymentDiscount(payment);

  const discountRow =
    document.querySelector(
      "#checkoutDiscountRow"
    );

  const discountEl =
    document.querySelector(
      "#checkoutDiscount"
    );

  const total =
    document.querySelector(
      "#checkoutTotal"
    );

  const banner =
    document.querySelector(
      "#discountBanner"
    );


  /* =========================================================
     ENTREGA SOMENTE PIX OU CARTÃO
     ========================================================= */

  const cashOption =
    document.querySelector(
      "#cashPaymentOption"
    );

  const cashInput =
    document.querySelector(
      '#cashPaymentOption input'
    );

  if(
    cashOption &&
    cashInput
  ){

    if(
      type === "uber" ||
      type === "entrega"
    ){

      cashOption.style.opacity =
        ".45";

      cashOption.style.pointerEvents =
        "none";

      if(cashInput.checked){

        cashInput.checked =
          false;

      }

    }else{

      cashOption.style.opacity =
        "1";

      cashOption.style.pointerEvents =
        "auto";

    }

  }


  /* =========================================================
     DESCONTO
     ========================================================= */

  if(discount > 0){

    if(discountRow){

      discountRow.style.display =
        "flex";

    }

    if(discountEl){

      discountEl.textContent =
        "-" + money(discount);

    }

    if(banner){

      banner.innerHTML = `

        🎁 <strong>
          Desconto aplicado!
        </strong>

        <br>

        ${
          payment === "pix"
            ? "Pagamento no Pix"
            : "Pagamento em dinheiro"
        }

        <strong>
          acima de R$ 100,00
        </strong>
        recebe desconto.

      `;

      banner.classList.add(
        "discount-active"
      );

    }

  }else{

    if(discountRow){

      discountRow.style.display =
        "none";

    }

    if(banner){

      banner.innerHTML = `

        🎁 <strong>
          Compras acima de R$ 100,00
        </strong>

        <br>

        Ganhe desconto pagando no
        <strong>Pix</strong> ou
        <strong>dinheiro</strong>.

      `;

      banner.classList.remove(
        "discount-active"
      );

    }

  }


  if(total){

    total.textContent =
      money(
        totalWithPayment(payment)
      );

  }

}


/* =========================================================
   CAMPOS DO CHECKOUT
   ========================================================= */

function setupCheckoutInputs(){

  const cpf =
    document.querySelector(
      "#checkoutCPF"
    );

  if(cpf){

    cpf.addEventListener(
      "input",
      () => {

        cpf.value =
          formatCPF(
            cpf.value
          );

      }
    );

  }

  const cep =
    document.querySelector(
      "#checkoutCEP"
    );

  if(cep){

    cep.addEventListener(
      "input",
      () => {

        cep.value =
          formatCEP(
            cep.value
          );

      }
    );

  }

}


/* =========================================================
   CPF
   ========================================================= */

function formatCPF(value){

  value =
    value
      .replace(/\D/g,"")
      .slice(0,11);

  if(value.length > 3){

    value =
      value.replace(
        /(\d{3})(\d)/,
        "$1.$2"
      );

  }

  if(value.length > 7){

    value =
      value.replace(
        /(\d{3})(\d)/,
        "$1.$2"
      );

  }

  if(value.length > 11){

    value =
      value.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
      );

  }

  return value;

}


/* =========================================================
   CEP
   ========================================================= */

function formatCEP(value){

  value =
    value
      .replace(/\D/g,"")
      .slice(0,8);

  if(value.length > 5){

    value =
      value.replace(
        /^(\d{5})(\d)/,
        "$1-$2"
      );

  }

  return value;

}


/* =========================================================
   FORMA DE RECEBIMENTO
   ========================================================= */

function changeCheckoutType(){

  const type =
    document.querySelector(
      'input[name="checkoutType"]:checked'
    )?.value;

  const uberInfo =
    document.querySelector(
      "#checkoutUberInfo"
    );

  const deliveryInfo =
    document.querySelector(
      "#checkoutDeliveryInfo"
    );

  const addressFields =
    document.querySelector(
      "#checkoutAddressFields"
    );

  const delivery =
    document.querySelector(
      "#checkoutDelivery"
    );

  const deliveryFeeRow =
    document.querySelector(
      "#checkoutDeliveryFeeRow"
    );

  const error =
    document.querySelector(
      "#checkoutError"
    );

  if(!type) return;

  if(error){

    error.innerHTML = "";

  }


  /* =========================================================
     UBER
     ========================================================= */

  if(type === "uber"){

    if(uberInfo){

      uberInfo.style.display =
        "block";

    }

    if(deliveryInfo){

      deliveryInfo.style.display =
        "none";

    }

    if(addressFields){

      addressFields.style.display =
        "none";

    }

    if(delivery){

      delivery.textContent =
        "Uber — por conta do cliente";

    }

    if(deliveryFeeRow){

      deliveryFeeRow.style.display =
        "none";

    }

  }


  /* =========================================================
     ENTREGA
     ========================================================= */

  else if(type === "entrega"){

    if(uberInfo){

      uberInfo.style.display =
        "none";

    }

    if(deliveryInfo){

      deliveryInfo.style.display =
        "block";

    }

    if(addressFields){

      addressFields.style.display =
        "block";

    }

    if(delivery){

      delivery.textContent =
        "Entrega — taxa a combinar";

    }

    if(deliveryFeeRow){

      deliveryFeeRow.style.display =
        "flex";

    }

  }


  /* =========================================================
     RETIRADA PRESENCIAL
     ========================================================= */

  else{

    if(uberInfo){

      uberInfo.style.display =
        "none";

    }

    if(deliveryInfo){

      deliveryInfo.style.display =
        "none";

    }

    if(addressFields){

      addressFields.style.display =
        "none";

    }

    if(delivery){

      delivery.textContent =
        "Retirada presencial";

    }

    if(deliveryFeeRow){

      deliveryFeeRow.style.display =
        "none";

    }

  }


  updatePaymentSelection();

}


/* =========================================================
   ENVIAR PEDIDO PELO WHATSAPP
   ========================================================= */

function sendCheckoutWhatsApp(){

  const name =
    document.querySelector(
      "#checkoutName"
    )?.value.trim() || "";

  const cpf =
    document.querySelector(
      "#checkoutCPF"
    )?.value.trim() || "";

  const email =
    document.querySelector(
      "#checkoutEmail"
    )?.value.trim() || "";

  const type =
    document.querySelector(
      'input[name="checkoutType"]:checked'
    )?.value || "";

  const payment =
    document.querySelector(
      'input[name="paymentMethod"]:checked'
    )?.value || "";

  const obs =
    document.querySelector(
      "#checkoutObs"
    )?.value.trim() || "";

  const cep =
    document.querySelector(
      "#checkoutCEP"
    )?.value.trim() || "";

  const address =
    document.querySelector(
      "#checkoutAddress"
    )?.value.trim() || "";

  const error =
    document.querySelector(
      "#checkoutError"
    );


  /* =======================================================
     VALIDAÇÕES
     ======================================================= */

  if(!name){

    if(error)
      error.innerHTML =
        "⚠️ Informe seu nome completo.";

    document
      .querySelector("#checkoutName")
      ?.focus();

    return;

  }


  if(
    cpf.replace(/\D/g,"").length !== 11
  ){

    if(error)
      error.innerHTML =
        "⚠️ Informe um CPF válido.";

    document
      .querySelector("#checkoutCPF")
      ?.focus();

    return;

  }


  if(!type){

    if(error)
      error.innerHTML =
        "⚠️ Escolha como deseja receber o pedido.";

    return;

  }


  if(!payment){

    if(error)
      error.innerHTML =
        "⚠️ Escolha uma forma de pagamento.";

    return;

  }


  /* =======================================================
     ENTREGA A PARTIR DE R$ 50
     ======================================================= */

  if(type === "entrega"){

    if(totalCart() < DELIVERY.minimumOrder){

      if(error)
        error.innerHTML =
          `⚠️ A entrega está disponível somente para pedidos a partir de ${money(DELIVERY.minimumOrder)}.`;

      return;

    }

    if(
      payment !== "pix" &&
      payment !== "cartao"
    ){

      if(error)
        error.innerHTML =
          "⚠️ Para entrega, o pagamento deve ser feito somente via Pix ou cartão.";

      return;

    }

    if(!cep){

      if(error)
        error.innerHTML =
          "⚠️ Informe o CEP para a entrega.";

      document
        .querySelector("#checkoutCEP")
        ?.focus();

      return;

    }

    if(!address){

      if(error)
        error.innerHTML =
          "⚠️ Informe o endereço para a entrega.";

      document
        .querySelector("#checkoutAddress")
        ?.focus();

      return;

    }

  }


  /* =======================================================
     DINHEIRO
     ======================================================= */

  if(
    payment === "dinheiro" &&
    type !== "retirada"
  ){

    if(error)
      error.innerHTML =
        "⚠️ Pagamento em dinheiro disponível somente para retirada presencial.";

    return;

  }


  /* =======================================================
     PRODUTOS
     ======================================================= */

  const lines =
    cart
      .map(
        i =>
          `• ${i.name}
  Quantidade: ${i.qty}${
            i.variation
              ? `
  Variação: ${i.variation}`
              : ""
          }
  Valor: ${money(i.price * i.qty)}`
      )
      .join("\n\n");


  const productsValue =
    totalCart();

  const discount =
    paymentDiscount(payment);

  const total =
    totalWithPayment(payment);


  /* =======================================================
     FORMA DE RECEBIMENTO
     ======================================================= */

  let receive = "";

  if(type === "uber"){

    receive =
      "🛵 Retirada via Uber — por conta do cliente";

  }else if(type === "entrega"){

    receive =
      "🚚 Entrega — disponível a partir de R$ 50,00";

  }else{

    receive =
      "🛍️ Retirada presencial";

  }


  /* =======================================================
     FORMA DE PAGAMENTO
     ======================================================= */

  let paymentText = "";

  if(payment === "pix"){

    paymentText =
      "💚 Pix";

  }else if(payment === "cartao"){

    paymentText =
      "💳 Cartão";

  }else if(payment === "dinheiro"){

    paymentText =
      "💵 Dinheiro";

  }


  /* =======================================================
     INFORMAÇÕES EXTRAS
     ======================================================= */

  let receiveInfo = "";


  if(type === "uber"){

    receiveInfo = `

🛵 Uber:
Após a confirmação da loja, o cliente deverá solicitar o Uber.
A retirada é por conta do cliente.

Atenção: aguarde a confirmação da loja antes de solicitar o Uber.`;

  }


  if(type === "entrega"){

    receiveInfo = `

🚚 Entrega:
Pedido mínimo para entrega: ${money(DELIVERY.minimumOrder)}.
Taxa de entrega: a combinar com a loja.

📍 CEP:
${cep}

📍 Endereço:
${address}

Pagamento para entrega: somente Pix ou cartão.`;

  }


  if(type === "retirada"){

    receiveInfo = `

🛍️ Retirada:
Presencial na loja.`;

  }


  /* =======================================================
     MENSAGEM WHATSAPP
     ======================================================= */

  const message =

`Olá! Quero fazer um pedido na ${STORE.name} 💛

🛍️ Produtos

${lines}

━━━━━━━━━━━━━━━━━━

💰 Valor dos produtos:
${money(productsValue)}

${
  discount > 0
    ? `🎁 Desconto:
-${money(discount)}

`
    : ""
}📦 Forma de recebimento:
${receive}

💳 Forma de pagamento:
${paymentText}

💰 Total:
${money(total)}

━━━━━━━━━━━━━━━━━━

👤 Dados do cliente

Nome:
${name}

CPF:
${cpf}

E-mail:
${email || "Não informado"}
${receiveInfo}

${
  obs
    ? `

📝 Observações

${obs}`
    : ""
}

━━━━━━━━━━━━━━━━━━

Gostaria de confirmar meu pedido e receber as orientações para pagamento. 💕`;


  /* =======================================================
     WHATSAPP
     ======================================================= */

  const phone =
    STORE.whatsapp.replace(
      /\D/g,
      ""
    );

  if(
    !phone ||
    phone === "5500000000000"
  ){

    if(error){

      error.innerHTML = `
        ⚠️ Configure o número do WhatsApp
        no início do app.js.
      `;

    }

    return;

  }


  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );


  closeCheckout();

}


/* =========================================================
   FECHAR CHECKOUT
   ========================================================= */

function closeCheckout(){

  const modal =
    document.querySelector(
      "#checkoutModal"
    );

  if(modal){

    modal.classList.remove(
      "open"
    );

  }

  document.body.style.overflow =
    "";

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(t){

  const el =
    document.querySelector(
      "#toast"
    );

  if(!el) return;

  el.textContent =
    t;

  el.classList.add(
    "show"
  );

  setTimeout(
    () => {

      el.classList.remove(
        "show"
      );

    },
    2300
  );

}


/* =========================================================
   ESTILO DO CHECKOUT
   ========================================================= */

function addCheckoutModalStyles(){

  if(
    document.querySelector(
      "#checkoutModalStyles"
    )
  ){

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "checkoutModalStyles";


  style.textContent = `

    #checkoutModal{
      display:none;
    }

    #checkoutModal.open{
      display:block;
    }

    .checkout-overlay{

      position:fixed;
      inset:0;
      z-index:99999;

      background:
        rgba(20,15,12,.62);

      backdrop-filter:
        blur(5px);

      display:flex;

      align-items:center;
      justify-content:center;

      padding:20px;

      overflow-y:auto;

    }


    .checkout-box{

      position:relative;

      width:min(520px,100%);

      max-height:90vh;

      overflow-y:auto;

      background:#fff;

      border-radius:22px;

      padding:25px;

      box-shadow:
        0 25px 70px
        rgba(0,0,0,.3);

    }


    .checkout-close{

      position:absolute;

      right:15px;
      top:10px;

      width:36px;
      height:36px;

      border:0;

      background:#f7f2ee;

      border-radius:50%;

      font-size:25px;

      cursor:pointer;

      color:#777;

    }


    .checkout-header{

      display:flex;

      align-items:center;

      gap:12px;

      padding-right:35px;

      margin-bottom:20px;

    }


    .checkout-icon{

      width:48px;
      height:48px;

      display:flex;

      align-items:center;
      justify-content:center;

      background:#fff4ee;

      border-radius:15px;

      font-size:23px;

    }


    .checkout-box h2{

      margin:0 0 4px;

      color:#403831;

      font-size:1.35rem;

    }


    .checkout-header p{

      margin:0;

      color:#81766c;

      font-size:.78rem;

    }


    .checkout-fields{

      display:flex;

      flex-direction:column;

      gap:12px;

    }


    .checkout-fields > label{

      display:block;

      font-size:.76rem;

      font-weight:700;

      color:#554b43;

    }


    .checkout-fields label small{

      color:#978b81;

      font-weight:500;

    }


    .checkout-fields input,
    .checkout-fields textarea{

      display:block;

      width:100%;

      box-sizing:border-box;

      margin-top:5px;

      border:1px solid #ded5ce;

      border-radius:10px;

      padding:11px 12px;

      font-family:inherit;

      font-size:.8rem;

      background:#fff;

      outline:none;

    }


    .checkout-fields textarea{

      min-height:80px;

      resize:vertical;

    }


    .checkout-section-title{

      font-size:.76rem;

      font-weight:800;

      color:#554b43;

      margin-top:4px;

    }


    /* =====================================================
       RECEBIMENTO
       ===================================================== */

    .checkout-types{

      display:grid;

      grid-template-columns:
        repeat(3,1fr);

      gap:9px;

    }


    .checkout-type{

      display:flex;

      align-items:flex-start;

      gap:8px;

      border:1px solid #e3d9d0;

      border-radius:12px;

      padding:12px;

      cursor:pointer;

      background:#fff;

      transition:.2s;

    }


    .checkout-type:hover{

      border-color:#b99170;

      background:#fffaf6;

    }


    .checkout-type input{

      margin-top:4px;

      accent-color:#9d7455;

    }


    .checkout-type span{

      display:flex;

      flex-direction:column;

      gap:2px;

      font-size:17px;

    }


    .checkout-type strong{

      font-size:.76rem;

      color:#4f463f;

    }


    .checkout-type small{

      font-size:.64rem;

      color:#8d8177;

    }


    /* =====================================================
       PAGAMENTO
       ===================================================== */

    .payment-options{

      display:grid;

      grid-template-columns:
        repeat(3,1fr);

      gap:8px;

    }


    .payment-option{

      display:flex;

      align-items:flex-start;

      gap:7px;

      border:1px solid #e3d9d0;

      border-radius:12px;

      padding:11px;

      cursor:pointer;

      background:#fff;

      transition:.2s;

    }


    .payment-option:hover{

      border-color:#b99170;

      background:#fffaf6;

    }


    .payment-option input{

      margin-top:4px;

      accent-color:#3c8a55;

    }


    .payment-option span{

      display:flex;

      flex-direction:column;

      gap:3px;

    }


    .payment-option strong{

      font-size:.76rem;

      color:#4f463f;

    }


    .payment-option small{

      font-size:.62rem;

      color:#8d8177;

      line-height:1.3;

    }


    /* =====================================================
       AVISO DE DESCONTO
       ===================================================== */

    .discount-banner{

      margin-top:4px;

      padding:13px 14px;

      border-radius:13px;

      background:#eaf8ee;

      border:1px solid #b9e2c4;

      color:#317044;

      font-size:.75rem;

      line-height:1.5;

      text-align:center;

      transition:.2s;

    }


    .discount-banner.discount-active{

      background:#dff4e5;

      border-color:#8fd0a0;

    }


    /* =====================================================
       INFORMAÇÕES DE ENTREGA
       ===================================================== */

    .checkout-delivery-info{

      padding:11px 12px;

      border-radius:11px;

      background:#fff6ec;

      border:1px solid #f0ddc7;

      color:#765b43;

      font-size:.72rem;

      line-height:1.5;

    }


    /* =====================================================
       RESUMO
       ===================================================== */

    .checkout-resume{

      margin-top:18px;

      border-top:1px solid #eee5df;

      padding-top:12px;

      display:flex;

      flex-direction:column;

      gap:7px;

    }


    .checkout-resume > div{

      display:flex;

      justify-content:space-between;

      align-items:center;

      font-size:.79rem;

      color:#776d65;

    }


    .checkout-resume strong{

      color:#554b43;

    }


    .checkout-total-final{

      margin-top:4px;

      padding-top:10px;

      border-top:1px dashed #ddd1c6;

      color:#3f3731 !important;

      font-size:.95rem !important;

    }


    .checkout-total-final strong{

      font-size:1.2rem;

    }


    .checkout-error{

      min-height:5px;

      margin-top:10px;

      color:#a34f4f;

      font-size:.72rem;

      line-height:1.4;

    }


    .checkout-send{

      margin-top:5px;

      min-height:46px;

      width:100%;

    }


    /* =====================================================
       CELULAR
       ===================================================== */

    @media(max-width:600px){

      .checkout-overlay{

        padding:10px;

      }


      .checkout-box{

        padding:20px;

        border-radius:18px;

      }


      .checkout-types{

        grid-template-columns:1fr;

      }


      .payment-options{

        grid-template-columns:1fr;

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupFilters();

    renderProducts();

    updateCartUI();


    document
      .querySelectorAll(".open-cart")
      .forEach(
        x =>
          x.addEventListener(
            "click",
            openCart
          )
      );


    document
      .querySelectorAll(".close-cart")
      .forEach(
        x =>
          x.addEventListener(
            "click",
            closeCart
          )
      );


    document
      .querySelector("#closeModal")
      ?.addEventListener(
        "click",
        closeModal
      );


    document
      .querySelector("#addCurrent")
      ?.addEventListener(
        "click",
        addCurrent
      );


    document
      .querySelector("#checkout")
      ?.addEventListener(
        "click",
        checkoutWhatsApp
      );


    document
      .querySelector("#menuBtn")
      ?.addEventListener(
        "click",
        () => {

          document
            .querySelector("#navlinks")
            ?.classList
            .toggle(
              "mobile-open"
            );

        }
      );

  }
);

/* =========================================================
   SLIDER DO HERO
========================================================= */

let heroSlideIndex = 0;
let heroSlideTimer;


/* =========================================================
   MOSTRAR SLIDE
========================================================= */

function showHeroSlide(index) {

  const slides =
    document.querySelectorAll(".hero-slide");

  const dots =
    document.querySelectorAll(".slider-dot");

  if (!slides.length) return;


  if (index >= slides.length) {
    heroSlideIndex = 0;
  }

  if (index < 0) {
    heroSlideIndex =
      slides.length - 1;
  }


  slides.forEach((slide, i) => {

    slide.classList.toggle(
      "active",
      i === heroSlideIndex
    );

  });


  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === heroSlideIndex
    );

  });

}


/* =========================================================
   PRÓXIMO / ANTERIOR
========================================================= */

function changeHeroSlide(direction) {

  heroSlideIndex += direction;

  showHeroSlide(heroSlideIndex);

  restartHeroSlider();

}


/* =========================================================
   ESCOLHER SLIDE
========================================================= */

function goHeroSlide(index) {

  heroSlideIndex = index;

  showHeroSlide(heroSlideIndex);

  restartHeroSlider();

}


/* =========================================================
   SLIDE AUTOMÁTICO
========================================================= */

function startHeroSlider() {

  clearInterval(heroSlideTimer);

  heroSlideTimer =
    setInterval(() => {

      heroSlideIndex++;

      showHeroSlide(heroSlideIndex);

    }, 4000);

}


/* =========================================================
   REINICIAR SLIDER
========================================================= */

function restartHeroSlider() {

  startHeroSlider();

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showHeroSlide(0);

    startHeroSlider();

  }
);

