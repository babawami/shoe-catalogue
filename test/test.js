describe(' Shoe Catalogue ', function () {
    it('Return error message if nothing found', function () {
        let shoes = ShoeFinder();
        shoes.shoeMatch('Adidas', 7, 'black');
        // console.log(shoes.errorMessage());
        assert.deepEqual(shoes.errorMessage(), 'No Shoe Found');
    });

    it('Return Shoe/shoes that match the color selected', function () {
        let shoes = ShoeFinder();
        // console.log(shoes.shoeMatch('Adidas', 7, 'black'));
        assert.deepEqual(shoes.shoeMatch('white', '', ''), [
            { color: 'white', brand: 'adidas', price: 275, size: 10, in_stock: 3, id: 2 }
        ]);
    });

    it('Return Shoe/shoes that match the size selected', function () {
        let shoes = ShoeFinder();
        console.log(shoes.shoeMatch('', '', 7))
        assert.deepEqual(shoes.shoeMatch('', '', 7), [{
            color: 'blue',
            brand: 'nike',
            price: 350,
            size: 7,
            in_stock: 5,
            id: 1
        }, {
            color: 'brown',
            brand: 'adidas',
            price: 350,
            size: 7,
            in_stock: 20,
            id: 3
        } ]);
    });

    it('Return Shoe/shoes that match the brand selected', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('', 'puma', ''), [
            { color: 'black', brand: 'puma', price: 275, size: 9, in_stock: 3, id: 5 }
        ]);
    });

    it('Return Shoe/shoes that match the size and brand selected', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('', 'nike', 7), [{
            color: 'blue',
            brand: 'nike',
            price: 350,
            size: 7,
            in_stock: 5,
            id: 1
        }]);
    });

    it('Return Shoe/shoes that match the size and colour selected', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('black', '', 9), [{
            color: 'black',
            brand: 'puma',
            price: 275,
            size: 9,
            in_stock: 3,
            id: 5
        }
        ]);
    });

    it('Return Shoe/shoes that match the brand and colour selected', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('white', 'adidas', ''), [{
            color: 'white',
            brand: 'adidas',
            price: 275,
            size: 10,
            in_stock: 3,
            id: 2
        }
        ]);
    });

    it('Return Shoe/shoes that match the brand,colour and size selected', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('white', 'adidas', 10), [{
            color: 'white',
            brand: 'adidas',
            price: 275,
            size: 10,
            in_stock: 3,
            id: 2
        }
        ]);
    });

    it('Return nothing if no match found', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.shoeMatch('Adidas', '', 'black'), []);
    });

    it('Increase stock quantity when new shoe is added', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.addStock('white', 'adidas', 10, 280, 10), [
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 5, id: 1 },
            { color: 'white', brand: 'adidas', price: 280, size: 10, in_stock: 13, id: 2 },
            { color: 'brown', brand: 'adidas', price: 350, size: 7, in_stock: 20, id: 3 },
            { color: 'blue', brand: 'reebok', price: 450, size: 6, in_stock: 15, id: 4 },
            { color: 'black', brand: 'puma', price: 275, size: 9, in_stock: 3, id: 5 }]);
    });

    it('Add new inventory when shoe is not in stock', function () {
        let shoes = ShoeFinder();
        assert.deepEqual(shoes.addStock('pink', 'fila', 6, 200, 20), [
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 5, id: 1 },
            { color: 'white', brand: 'adidas', price: 275, size: 10, in_stock: 3, id: 2 },
            { color: 'brown', brand: 'adidas', price: 350, size: 7, in_stock: 20, id: 3 },
            { color: 'blue', brand: 'reebok', price: 450, size: 6, in_stock: 15, id: 4 },
            { color: 'black', brand: 'puma', price: 275, size: 9, in_stock: 3, id: 5 },
            { color: 'pink', brand: 'fila', price: 200, size: 6, in_stock: 20, id: 6 }]);
    });

    it('Add shoe to cart', function () {
        let shoes = ShoeFinder();
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        shoes.addToBasket(1);
        assert.deepEqual(shoes.returnCart(), [
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 0, id: 1 },
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 0, id: 1 },
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 0, id: 1 },
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 0, id: 1 },
            { color: 'blue', brand: 'nike', price: 350, size: 7, in_stock: 0, id: 1 }
        ]);
    });

    it('When the user clicks checkout then it should clear the basket', function () {
        let shoes = ShoeFinder();
        shoes.addToBasket(1);
        shoes.addToBasket();
        console.log(shoes.returnCart());
        assert.deepEqual(shoes.checkOut(), []);
    });

    it('Return the stock back when cancelled', function () {
        let shoes = ShoeFinder();
        shoes.addToBasket(1);
        assert.deepEqual(shoes.cancelOrder(), []);
    });
});
