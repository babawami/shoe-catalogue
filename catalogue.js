function ShoeFinder(){
  let shoeData = [
        {color : 'blue',brand : "Nike",  price : 350, size: 7,in_stock : 5 },
        {color : 'white',  brand : "Adidas",  price : 275,size: 10,  in_stock : 3},
        { color : 'brown',  brand : "Adidas",  price : 350,  size: 7,in_stock : 20},
        {color : 'blue',  brand : "Reebok",  price : 450,size: 6,in_stock : 15  },
        {color : 'black',  brand : "Puma",price : 275,size: 9,in_stock : 3},
];

const shoeArr = [];

 function shoeMatch(chosenBrand,chosenSize,chosenColour){
   for(var i = 0; i< shoeData.length; i++){
     let listObj = shoeData[i];
     // console.log(listObj);
     if(chosenBrand ==listObj.brand && chosenSize == listObj.size && chosenColour == listObj.color ){
       shoeArr.push(listObj)
     }
     else if(chosenBrand === listObj.brand && chosenSize === listObj.size && chosenColour === ''){
       shoeArr.push(listObj);
     }

     else if(chosenBrand === listObj.brand && chosenSize === '' && chosenColour === listObj.color){
       shoeArr.push(listObj);
     }
    else if(chosenBrand === '' && chosenSize === listObj.size && chosenColour === listObj.color){
       shoeArr.push(listObj);
     }
    else if(chosenBrand === listObj.brand && chosenSize === ''&& chosenColour === ''){
       shoeArr.push(listObj);
     }
  else   if(chosenBrand === '' && chosenSize === listObj.size && chosenColour === ''){
       shoeArr.push(listObj);
     }
    else if(chosenBrand === '' && chosenSize === '' && chosenColour === listObj.color){
       shoeArr.push(listObj);
     }


   }
      // console.log(shoeMatch('Adidas'));
   return shoeArr;
   }


function errorMessage(){
  if( shoeArr.length === 0){
    return 'No Shoe Found'
  }
}









// function matchingShoe(brand, color, size ){
//   for ( var i = 0 ; i< shoeData.length; i++){
//      var shoeList = shoeData[i]; // loops through the array returns objects
//
//
//
//   // var exists = false
//   // if(shoeList.color == color && shoeList.brand == brand && shoeList.size == size){
//   //   shoelist.in_stock ++
//   //   exists = true
//   // }
//
//   }
//    //return shoeList;
//
//


return {
shoeMatch,
errorMessage

}
}
