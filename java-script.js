const productsMercadoria = document.querySelector("#products");
const shopCart = document.querySelector("#Shop-cart");
const addCart = document.querySelector("#addCart");
const qtdCart = document.querySelector("#qtdCart");
const cartBuy = document.querySelector("#cartBuy");
const ContainerProfutos = document.querySelector(".produtos-mercadoria");
const fundoList = document.querySelector("#fundoList");
const ListCompra = document.querySelector("#ListCompra");
const RemoveList = document.querySelector("#RemoveList");
const carrinhoID = document.querySelector("#carrinhoID");
const removerItem = document.querySelector("#removerItem");
const Valortotal = document.querySelector(".valorTotal");
const nomeProduto = document.querySelector("#nomeProduto");





RemoveList.addEventListener("click", (e) => {
    e.preventDefault();
    fundoList.style.display = 'none';
})

cartBuy.addEventListener("click", (e) => {
    e.preventDefault();
    fundoList.style.display = 'flex';
})

shopCart.addEventListener("click", (e) =>{
    e.preventDefault();
    shopCart.stye.background = 'white';
})


const products = [
    {
        id: 0,
        nome: 'Sony Playstation 5',
        image: './img/produto-ps5-img.png',
        quantidade: 0,
        valor_uni: 4.209,
        valor_total: 0,
    },
    {
        id: 1,
        nome: 'JBL PartyBox 310',
        image: './img/produto-jbl-img.png',
        quantidade: 0,
        valor_uni: 3.271,
        valor_total: 0,
    },
    {
        id: 2,
        nome: 'Apple iPhone 15 (256 GB)',
        image: './img/produto-iphone-img.png',
        quantidade: 0,
        valor_uni: 6.582,
        valor_total: 0,
    },
    {
        id: 3,
        nome: 'Notebook Samsung Galaxy',
        image: './img/produto-notebook-img.png',
        quantidade: 0,
        valor_uni: 1.398,
        valor_total: 0,
    },
    {
        id: 4,
        nome: 'Smart Tv 32Polegadas',
        image: './img/produto-smartv-img.png',
        quantidade: 0,
        valor_uni: 1.099,
        valor_total: 0,
    },
    {
        id: 5,
        nome: 'FIFINE Microfone Dinâmico',
        image: '.img/produto-microfone-img.png',
        quantidade: 0,
        valor_uni: 340.99,
        valor_total: 0,
    },
    {
        id: 6,
        nome: 'Fone Gamer over-ear Sony',
        image: './img/Fone-gamer-sony-img.png',
        quantidade: 0,
        valor_uni: 519.99,
        valor_total: 0,
    }
]


function atualizarCarrinho(){
    let totalItensCarrinho = 0;
    for(i = 0; i< products.length; i++){
        totalItensCarrinho += products[i].quantidade;
    }

    qtdCart.innerHTML = totalItensCarrinho;
    if(totalItensCarrinho = ""){
        console.log("Adicione algo ao carrinho!");
    }

    console.log("carrinho atualizado: ", products);
}

let links = document.getElementsByTagName('input');
for (var i = 0; i < links.length; i++) {
    links[i].removeEventListener("click", carrinhoClick);
    links[i].addEventListener("click", carrinhoClick);
}

function somaProduct(){
    let vlTotal = 0;
    let valorTodosElementos = vlTotal;
    valorProduto = 0;
    for(i = 0; i < products.length; i++){
        let valorProduto = products[i].valor_uni * products[i].quantidade;

        vlTotal = vlTotal + valorProduto;
    }

    console.log(vlTotal);
}

function carrinhoClick() {
    let key = this.getAttribute('key');
    if (key !== null) {
        products[key].quantidade++;
        products[key].vlTotal = products[key].quantidade * products[key].valor_uni;

        atualizarCarrinho();

        somaProduct();

        console.log("Quantidade atualizada:", products[key].quantidade);
        console.log("Valor do produto: R$", products[key].vlTotal);
    }
    return false;
}

const carrinho = [];


function adicionarCarrinho(){
}


    




