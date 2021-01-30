const productsBase = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 4, title: 'Gamepad', price: 50},
];

class ProductList {
    constructor ({container, productList} = {}) {
        this.container = container;
        this.productList = productList;
    }
    goodsList() {
        let sum = 0;
        this.productList.forEach(item => sum+= item.price);
        return sum;
    }
    renderProducts = () => {
        let parentElem = document.querySelector(this.container);
        this.productList.forEach(item => {
            const productItem = new ProductItem(item);
            parentElem.insertAdjacentHTML('beforeend', productItem.renderProduct());
        });
    }
}

class ProductItem {
    constructor ({title, price, id} = {}) {
        this.title = title;
        this.price = price;
        this.id = price;
        this.img = 'http://placehold.it/200x150';
    }
    renderProduct () {
        return `<div class="product-item card" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="placeholder">
                    <div class="card-body">
                        <h3 class="card-title">${this.title}</h3>
                        <p class="card-text">${this.price}</p>
                        <button class="btn buy-btn btn-info">Купить</button>
                    </div>
                </div>`
    }
}

class cardItem {
    constructor ({id, price, title} = {}) {
        this.id = id;
        this.price = price;
        this.titel = title;
    }
}

class card {
    removeItem () {

    }
    addItem () {
        
    }
}


let productList = new ProductList({
    container: '.products',
    productList: productsBase
});
productList.renderProducts();

console.log(productList.goodsList());