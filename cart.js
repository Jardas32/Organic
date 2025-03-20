const storege = JSON.parse(localStorage.getItem('carts')) || [];
const cart = document.querySelector('.cart');
const spanPrice = document.querySelector('.spanPrice');
const spanCounts = document.querySelector('.spanCounts');
spanCounts.textContent = storege.length;

if(storege.length > 0) {
   document.querySelector('.cartempty').textContent = `Your cart`;
}

function quantityPrice () {
    let totalPrices = storege.reduce((pre, item) => {
        return pre + item.price * item.quantity;
    },0)
    console.log(totalPrices);
    spanPrice.textContent = `${totalPrices}$`;
}

function renderCard() {
    cart.innerHTML = ``;
    if(storege) {
        storege.forEach((el, index) => {
            let {id, categorie, img, title, price, bt, quantity = 1} = el;
            let newcart = document.createElement("li");
            newcart.setAttribute('class', 'newcart');
            newcart.innerHTML = `
            <div class="newcart" id="${id}">
            <img class="imgcart" src="${img}" alt="">
            <span class="spanCategorie">${categorie}</span>
            <p class="titlecart">${title}</p>
            <span class="priceSale">${price * quantity}$</span>
            <div class="counts">
                <span data-index="${index}" class="spanMinus">-</span>
                <span class="spanValue">${quantity}</span>
                <span data-index="${index}" class="spanPlus">+</span>
            </div>
            <button data-index="${index}" class="btclosed">X</button>
            </div>
            `
            cart.appendChild(newcart);
        })
    }
    quantityPrice();
}

cart.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains('spanPlus')) {
        storege[index].quantity++;
        
    }else if(e.target.classList.contains('spanMinus')) {
        storege[index].quantity--;
        if(storege[index].quantity <= 0) {
            storege.splice(index, 1);
            location.reload();
        }
    }
    localStorage.setItem('carts', JSON.stringify(storege));
    renderCard();
})

renderCard();
                     
                    //   Удаление товаров с корзины


document.onclick = (e) => {
    const cartPosition = e.target.getAttribute('data-index');
    if(e.target.classList.contains('btclosed') && cartPosition !== null) {
        storege.splice(cartPosition, 1);
       localStorage.setItem('carts', JSON.stringify(storege));
       renderCard();
       location.reload();
    }
};
