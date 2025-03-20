const setcard = document.querySelectorAll('.card');
const cartStorege = JSON.parse(localStorage.getItem('carts')) || [];
document.querySelector('.spanCounts').textContent = cartStorege.length;

setcard.forEach((el )=> {
    let id = el.id;
    let categorie = el.childNodes[1].textContent;
    let img = el.childNodes[3].childNodes[1].attributes.src.textContent;
    let title = el.childNodes[5].childNodes[1].textContent;
    let pris = el.childNodes[5].childNodes[5].textContent;
    let bt = el.childNodes[5].childNodes[9];
    let price = parseInt(pris.replace(/\D/, ""), 10);
bt.addEventListener('click', () => {
    let card = {id, categorie, img, title, price, quantity: 1};
    const cartStorege = localStorage.getItem('carts') || "[]";
    let carts = JSON.parse(cartStorege);
    const existCart = carts.findIndex((item) => item.id === id);
    if(existCart !== -1) {
        alert('Такой товар уже добавлен в корзину!')
    }
    else {
        carts.push(card);
    }
localStorage.setItem('carts', JSON.stringify(carts));
location.reload();
})    
});

                 //  Pop-Up

window.addEventListener('DOMContentLoaded', () => {

const cartSet = document.querySelectorAll('.card');
const imgpopup = document.querySelector('.imgpopup');
const titlepopup = document.querySelector('.titlepopup');
const pricepopup = document.querySelector('.pricepopup');

cartSet.forEach(el => {
    let openPopup = el.childNodes[3];
    let img = el.childNodes[3].childNodes[1].attributes.src.textContent;
    let title = el.childNodes[5].childNodes[1].textContent;
    let price = el.childNodes[5].childNodes[3].textContent;
    let pricenumb = parseInt(price.replace(/\D/, ""), 10);

openPopup.addEventListener('click', () => {
    imgpopup.src = img;
    titlepopup.textContent = title;
    pricepopup.textContent = `${pricenumb}$`;

document.querySelector('.popupbg').classList.add('popupbgclass');
document.querySelector('html').classList.add('noScroll');
})
document.querySelector('.closedpopup').addEventListener('click', () => {
    document.querySelector('.popupbg').classList.remove('popupbgclass');
    document.querySelector('html').classList.remove('noScroll');
})
})

});