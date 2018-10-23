function ShoeFinder (storedShoes, storedCart) {
    let shoeData = [{
        color: 'blue',
        brand: 'nike',
        price: 350,
        size: 7,
        in_stock: 5,
        id: 1
    },
    {
        color: 'white',
        brand: 'adidas',
        price: 275,
        size: 10,
        in_stock: 3,
        id: 2
    },
    {
        color: 'brown',
        brand: 'adidas',
        price: 350,
        size: 7,
        in_stock: 20,
        id: 3
    },
    {
        color: 'blue',
        brand: 'reebok',
        price: 450,
        size: 6,
        in_stock: 15,
        id: 4
    },
    {
        color: 'black',
        brand: 'puma',
        price: 275,
        size: 9,
        in_stock: 3,
        id: 5
    }
    ];

    let cart = [];
    let shoeArr = [];

    if (storedShoes && storedShoes.length > 0) {
        shoeData = [];
        for (let i = 0; i < storedShoes.length; i++) {
            shoeData.push(storedShoes[i]);
        }
    }

    if (storedCart && storedCart.length > 0) {
        for (let i = 0; i < storedCart.length; i++) {
            cart.push(storedCart[i]);
        }
    }

    // define a filtering function
    function shoeMatch (chosenColour, chosenBrand, chosenSize) {
        shoeArr = [];

        // loop through the list
        chosenSize = parseInt(chosenSize);
        shoeData.forEach(function (currentData) {
            if (chosenColour === currentData.color || chosenColour === '') {
                if (chosenBrand === currentData.brand || chosenBrand === '') {
                    if (chosenSize === currentData.size || isNaN(chosenSize)) {
                        shoeArr.push(currentData);
                    }
                }
            }
        });
        return shoeArr;
    }

    function errorMessage () {
        if (shoeArr.length === 0) {
            return 'No Shoe Found';
        }
    }

    // add new stock
    function addStock (newColor, newBrand, newSize, newPrice, newStock) {
        let productItem = false;
        for (let i = 0; i < shoeData.length; i++) {
            let currentData = shoeData[i];
            // When  product item is true udate shoe stock
            if (newColor === currentData.color && newBrand === currentData.brand && newSize === currentData.size) {
                currentData.in_stock += newStock;
                currentData.price = newPrice;
                productItem = true;
                // return "inventory updated"
            }
        }
        // If product item is false push new shoe to shoe shoeData
        let id = shoeData.length + 1;
        if (!productItem) {
            shoeData.push({
                id: id,
                color: newColor,
                brand: newBrand,
                price: newPrice,
                size: newSize,
                in_stock: newStock
            });
        }
        return shoeData;
    };

    // add to cart
    function addToBasket (shoeSelectedId) {
        // will have filtered shoes and the user will select the shoe they want from the catelogue
        for (let i = 0; i < shoeData.length; i++) {
            let currentShoe = shoeData[i];
            if (currentShoe.id === shoeSelectedId) {
                if (currentShoe.in_stock > 0) {
                    // check if shoe in cart
                    let shoeInCart = cart.find((current) => {
                        return current.id === shoeSelectedId;
                    });
                    if (!shoeInCart)

                    {
                        currentShoe.in_stock--;
                        cart.push({
                            id: currentShoe.id,
                            color: currentShoe.color,
                            brand: currentShoe.brand,
                            price: currentShoe.price,
                            size: currentShoe.size,
                            qty: 1

                        });
                    } else {
                        currentShoe.in_stock--;
                        shoeInCart.qty++;
                    }
                }
            }
        }
    }

    function cancelOrder () {
        for (let i = 0; i < cart.length; i++) {
            let currentCartItem = cart[i];
            for (let y = 0; y < shoeData.length; y++) {
                let currentShoe = shoeData[y];
                if (currentShoe.id === currentCartItem.id) {
                    currentShoe.in_stock += currentCartItem.qty;
                }
            }
        }
        return cart = [];
    }

    function checkOut () {
        return cart = [];
    }

    function returnCart () {
        return cart;
    }

    function returnAllShoes () {
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
    };
}
