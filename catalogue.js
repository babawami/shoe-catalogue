function ShoeFinder(){
  let shoeData = [
        {color : 'blue',brand : "nike",  price : 350, size: 7,in_stock : 5 },
        {color : 'white',  brand : "adidas",  price : 275,size: 10,  in_stock : 3},
        { color : 'brown',  brand : "adidas",  price : 350,  size: 7,in_stock : 20},
        {color : 'blue',  brand : "reebok",  price : 450,size: 6,in_stock : 15  },
        {color : 'black',  brand : "puma",price : 275,size: 9,in_stock : 3},
];

let shoeArr = [];

//define a filtering function
function shoeMatch(chosenColour, chosenBrand, chosenSize){
  //loop through the list
    shoeData.forEach(function(currentData){
      if(chosenColour == currentData.color || chosenColour === ''){
        if(chosenBrand == currentData.brand || chosenBrand === ''){
          if( chosenSize == currentData.size || chosenSize == null){
            shoeArr.push(currentData);
          }
        }
      }
    });
    return shoeArr;
  }

function errorMessage(){
  if( shoeArr.length === 0){
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
    // console.log(shoeData)
   
  }
  //If product item is false push new shoe to shoe shoeData
  if (!product_item) {
    shoeData.push({
      color: newColor,
      brand: newBrand,
      price: newPrice,
      size: newSize,
      in_stock: newStock
    });
  }
  console.log(shoeData)
  return shoeData;
};



return {
shoeMatch,
errorMessage,
addStock

}
}
