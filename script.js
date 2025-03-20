const cartset = document.querySelectorAll('.card');
const cartStorege = JSON.parse(localStorage.getItem('carts')) || [];
const spanCounts = document.querySelector('.spanCounts');
spanCounts.textContent = cartStorege.length;


cartset.forEach(el => {
    let id = el.id;
    let categorie = el.childNodes[1].textContent;
    let img = el.childNodes[3].childNodes[1].attributes.src.textContent;
    let title = el.childNodes[5].childNodes[1].textContent;
    let prices = el.childNodes[5].childNodes[5].textContent;
    let bt = el.childNodes[5].childNodes[9];
    let price = parseFloat(prices.replace(/[^0-9.]/g, ""));
  
bt.addEventListener('click', () => {
   let card = {id, categorie, img, title, price, bt, quantity: 1};
   const cartStorege = localStorage.getItem('carts') || "[]";
   let carts = JSON.parse(cartStorege);

const existCart = carts.findIndex((item) => item.id === id);
   if(existCart !== -1) {
      alert('Такой товар есть в корзине!')
   }
   else {
      carts.push(card);
   }

localStorage.setItem('carts', JSON.stringify(carts));
location.reload();
})

});

const product = document.querySelector('.product');

product.addEventListener('click', () => {
   document.querySelector('.products-section').scrollIntoView({
      behavior: `smooth`,
      block: `start`
   })
});

                           // Анимация-цифр при скроле 


document.addEventListener("DOMContentLoaded", function () {
   function isElementInViewport(el) {
       const rect = el.getBoundingClientRect();
       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       );
   }

   function animateNumbers() {
       document.querySelectorAll(".contentNumber span").forEach(span => {
           if (isElementInViewport(span) && !span.classList.contains("animated")) {
               span.classList.add("animated");
               let target = parseInt(span.textContent.replace(/\D/g, ""), 10);
               let count = 0;
               let step = Math.ceil(target / 100);
               let interval = setInterval(() => {
                   count += step;
                   if (count >= target) {
                       count = target;
                       clearInterval(interval);
                   }
            span.textContent = count + (span.textContent.includes("+") ? "%" : "+" );
               }, 20);
           }
       });
   }

   window.addEventListener("scroll", animateNumbers);
   animateNumbers();
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



