

class ProductList {
    constructor ({container} = {}) {
        this.container = container;
        this.productList = [];
    }
    _requestProductList() {
        return fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    renderProducts () {
        let parentElem = document.querySelector(this.container);
        this.productList.forEach(item => {
            const productItem = new ProductItem(item);
            parentElem.insertAdjacentHTML('beforeend', productItem.renderProduct());
        });
    }
    init() {
        this._requestProductList().then(data => {
            this.productList = [...data];
            this.renderProducts();
        });
        
        
    }
}

class ProductItem {
    constructor ({id_product, product_name, price} = {}) {
        this.id = id_product;
        this.name = product_name;
        this.price = price;
        this.img = 'http://placehold.it/200x150';
    }
    renderProduct () {
        return `<div class="product-item card" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="placeholder">
                    <div class="card-body">
                        <h3 class="card-title">${this.name}</h3>
                        <p class="card-text">${this.price}</p>
                        <button class="btn buy-btn btn-info" data-id="${this.id}">Купить</button>
                    </div>
                </div>`;
    }
}

class CartItem {
    constructor ({id_product, price, product_name} = {}) {
        this.id = id_product;
        this.price = price;
        this.title = product_name;
    }
    renderCardItem () {
        return `<div class="cart-item card border-light" style="max-width: 18rem;">
                    <div class="card-header">${this.title}<button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${this.price}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>`;
    }
}

class Cart {
    constructor () {
        this.cartList = [];
        this.container = '.cart-menu';
        this._requestCardList()
            .then(data => { 
                this.cartList = data.contents;
                this.renderItems();
                console.log(data);
                this.amount = data.amount;
                console.log(this);
                this.countGoods = data.countGoods;
            })
 
    }
    _requestCardList() {
        return fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json')
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    renderItems = () => {
        let cartMenu = document.querySelector(this.container);
        this.cartList.forEach(item => {
            console.log(this);
            const cartItem = new CartItem(item);
            cartMenu.insertAdjacentHTML('beforeend', cartItem.renderCardItem());
        });
    }
    removeItem (id) {

    }
    addItem () {
        
    }
}


let productList = new ProductList({
    container: '.products'
});
productList.init();

document.querySelector('.btn-cart').addEventListener('click', () => {
    let cartMenu = document.querySelector('.cart-menu');
    cartMenu.classList.toggle('btn-cart-open');
})

let cart = new Cart();