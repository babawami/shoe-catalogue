function ShoeFinder() {
  let shoeData = [{
      color: 'blue',
      brand: "nike",
      price: 350,
      size: 7,
      in_stock: 5,
      id: 0
    },
    {
      color: 'white',
      brand: "adidas",
      price: 275,
      size: 10,
      in_stock: 3,
      id:1
    },
    {
      color: 'brown',
      brand: "adidas",
      price: 350,
      size: 7,
      in_stock: 20,
      id:2
    },
    {
      color: 'blue',
      brand: "reebok",
      price: 450,
      size: 6,
      in_stock: 15,
      id:3
    },
    {
      color: 'black',
      brand: "puma",
      price: 275,
      size: 9,
      in_stock: 3,
      id:4
    }
  ];
  let cart = [];

  let shoeArr = [];

 

  //define a filtering function
  function shoeMatch(chosenColour, chosenBrand, chosenSize) {
    //loop through the list
    shoeData.forEach(function (currentData) {
      if (chosenColour == currentData.color || chosenColour === '') {
        if (chosenBrand == currentData.brand || chosenBrand === '') {
          if (chosenSize == currentData.size || chosenSize == null) {
            shoeArr.push(currentData);
          }
        }
      }
    });
    return shoeArr;
  }

  function errorMessage() {
    if (shoeArr.length === 0) {
      return 'No Shoe Found'
    }
  }

 // add new stock 
 function addStock(newColor,newBrand,newSize,newPrice,newStock) {
  let product_item = false;
  for(let i=0; i <shoeData.length; i++){
    let currentData = shoeData[i];
    //When  product item is true udate shoe stock
    if(newColor == currentData.color && newBrand == currentData.brand  && newSize == currentData.size ){
      currentData.in_stock += newStock;
      currentData.price = newPrice;
      product_item = true;
      // return "inventory updated"
    }
  }
  //If product item is false push new shoe to shoe shoeData
  let id = shoeData.length
  if (!product_item) {
    shoeData.push({
      id:id,
      color: newColor,
      brand: newBrand,
      price: newPrice,
      size: newSize,
      in_stock: newStock
    });
  }
  return shoeData;
};

  //add to cart 
  function addToBasket(shoeSelected) {
    // will have filtered shoes and the user will select the shoe they want from the catelogue
    for (let i = 0; i < shoeData.length; i++) {
      let currentShoe = shoeData[i];
      if (currentShoe.id === shoeSelected) {
        if (currentShoe.in_stock > 0) {
          currentShoe.in_stock--;
          cart.push(currentShoe);
        }
      } 
    }
  }

  function cancelOrder() {

    for (let i = 0; i < cart.length; i++) {
      let currentCartItem = cart[i];
      for (let y = 0; y < shoeData.length; y++) {
        let currentShoe = shoeData[y];
        if (currentShoe.id == currentCartItem.id) {
          currentShoe.in_stock++
        }
      }
    }
    return cart = [];
  }

  function checkOut(){
  return cart = [];
  }

  function returnCart() {
    return cart;
  }

  function returnAllShoes() {
    return shoeData;
  }





  return {
    returnAllShoes,
    shoeMatch,
    errorMessage,
    addStock,
    addToBasket,
    returnCart,
    cancelOrder,
    checkOut
  }
}


// function Basket () {

//   function add () {

//   }

//   function clear(catalogue, productId) {

//   }

//   function listAll() {

//   }


// }

