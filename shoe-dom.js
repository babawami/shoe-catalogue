// document.addEventListener('DOMContentLoaded', function () {
// reference the all  the elements
let filterBtn = document.querySelector('.fliter-btn');
let cartBtn = document.querySelector('.cart-btn');
let colourOption = document.querySelector('.colours');
let brandOption = document.querySelector('.brands');
let sizeOption = document.querySelector('.sizes');
let errorMessage = document.querySelector('.error');

let shoesStorage = localStorage.getItem('storeShoes') ? JSON.parse(localStorage.getItem('storeShoes')) : [];
let cartStorage = localStorage.getItem('storeCart') ? JSON.parse(localStorage.getItem('storeCart')) : [];
let getShoesData = ShoeFinder(shoesStorage, cartStorage);

// template to show shoes and when filtred
let shoesTemplate = document.querySelector('.shoeTemplate').innerHTML;
let complieShoeTemplate = Handlebars.compile(shoesTemplate);
let displayShoes = document.querySelector('.displayShoes');

// template adding to the cart
let cartTemplate = document.querySelector('.addCart').innerHTML;
let compileCartTemplate = Handlebars.compile(cartTemplate);
let displayCart = document.querySelector('.displayCart');

window.addEventListener('load', function () {
    let shoesData = {
        shoesData: getShoesData.returnAllShoes()
    };

    localStorage.setItem('storeShoes', JSON.stringify(shoesData.shoesData));
    displayShoes.innerHTML = complieShoeTemplate(shoesData);
    
    let showCart = {
        cart: getShoesData.returnCart()
    };
    displayCart.innerHTML = compileCartTemplate(showCart);
});

function showFilterdShoes () {
    let colour = colourOption.value;
    let brand = brandOption.value;
    let size = sizeOption.value;

    let filterShoes = {
        shoesData: getShoesData.shoeMatch(colour, brand, size)
    };
    if (filterShoes['shoesData'].length === 0) {
        displayShoes.innerHTML = '';
        errorMessage.innerHTML = 'No Shoe(s) Found';
    } else {
        errorMessage.innerHTML = '';
        displayShoes.innerHTML = complieShoeTemplate(filterShoes);
    }
}

function addToCart (shoeId) {
    showFilterdShoes();
    getShoesData.addToBasket(shoeId);
    let addShoeToCart = {
        shoesData: getShoesData.returnAllShoes()
    };
    localStorage.setItem('storeShoes', JSON.stringify(addShoeToCart.shoesData));

    let showCart = {
        cart: getShoesData.returnCart()
    };
    displayCart.innerHTML = compileCartTemplate(showCart);
    localStorage.setItem('storeCart', JSON.stringify(showCart.cart));
}

// function renderCart () {
//     let showCart = {
//         cart: getShoesData.returnCart()
//     };

//     console.log(showCart.cart);
//     displayCart.innerHTML = compileCartTemplate(showCart);
// }

filterBtn.addEventListener('click', function () {
    showFilterdShoes();
});

cartBtn.addEventListener('click', function () {
    addToCart();
    // console.log(renderCart());
    // renderCart();
});

// });
