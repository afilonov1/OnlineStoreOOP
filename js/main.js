const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title = 'titleName', price = 'price') => {
    return `<div class="product-item card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${price}</p>
                    <button class="btn buy-btn btn-info">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    const insertSpace = document.querySelector('.products');

    productsList.forEach( (item) => insertSpace.innerHTML += item);
};

renderPage(products);