let addBrand = document.querySelector('.add-brands');
let addColour = document.querySelector('.add-colours');
let addSize = document.querySelector('.add-sizes');
let addPrice = document.querySelector('.add-price');
let addQuantity = document.querySelector('.add-quantity');
let shoeMessage = document.querySelector('.shoeMessage');
let addBtn = document.querySelector('.add-btn');

let shoesStorage = localStorage.getItem('storeShoes') ? JSON.parse(localStorage.getItem('storeShoes')) : [];
let cartStorage = localStorage.getItem('storeCart') ? JSON.parse(localStorage.getItem('storeCart')) : [];
let getShoesData = ShoeFinder(shoesStorage, cartStorage);

// let shoesTemplate = document.querySelector('.shoeTemplate').innerHTML;
// let complieShoeTemplate = Handlebars.compile(shoesTemplate);
// let displayShoes = document.querySelector('.displayShoes');

// function renderTemplate () {
//     let shoesData = {
//         shoesData: getShoesData.returnAllShoes()
//     };

//     localStorage.setItem('storeShoes', JSON.stringify(shoesData.shoesData));
//     displayShoes.innerHTML = complieShoeTemplate(shoesData);
// };

function addShoe () {
    let newColor = addColour.value;
    console.log(newColor);
    let newBrand = addBrand.value;
    console.log(newBrand);
    let newSize = parseInt(addSize.value);
    console.log(newSize);
    let newPrice = parseInt(addPrice.value);
    console.log(newPrice);
    let newStock = parseInt(addQuantity.value);
    console.log(newStock);

    if (newColor !== '' && newBrand !== '' && newSize !== '' && newPrice !== '' && newStock !== '') {
        getShoesData.addStock(newColor, newBrand, newSize, newPrice, newStock);
        localStorage.setItem('storeShoes', JSON.stringify(getShoesData.returnAllShoes()));
        // getShoesData.returnAllShoes();
        shoeMessage.innerHTML = 'Shoe Has Been Added';
    } else {
        shoeMessage.innerHTML = 'Please Fill All The Sections Required';
    }
}

addBtn.addEventListener('click', function () {
    addShoe();
});
