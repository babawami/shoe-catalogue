describe(' Shoe Catalogue ', function() {
  it("Return Shoe/shoes that match the brand selected", function() {
    let shoes = ShoeFinder();
    // console.log(shoes.shoeMatch('Adidas', '', ''));
    assert.deepEqual(shoes.shoeMatch('Adidas', '', ''), [{
      color: 'white',
      brand: "Adidas",
      price: 275,
      size: 10,
      in_stock: 3
    }, {
      color: 'brown',
      brand: "Adidas",
      price: 350,
      size: 7,
      in_stock: 20
    }, ]);
  });
  it("Return Shoe/shoes that match the size selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('', 7, ''), [{
      color: 'blue',
      brand: "Nike",
      price: 350,
      size: 7,
      in_stock: 5,
    }, {
      color: 'brown',
      brand: "Adidas",
      price: 350,
      size: 7,
      in_stock: 20
    }, ]);
  });
  it("Return Shoe/shoes that match the colour selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('', '', 'blue'), [{
      color: 'blue',
      brand: "Nike",
      price: 350,
      size: 7,
      in_stock: 5,
    }, {
      color: 'blue',
      brand: "Reebok",
      price: 450,
      size: 6,
      in_stock: 15
    }, ]);
  });
  it("Return Shoe/shoes that match the size and brand selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('Nike', 7, ''), [{
      color: 'blue',
      brand: "Nike",
      price: 350,
      size: 7,
      in_stock: 5,
    }]);
  });
  it("Return Shoe/shoes that match the size and colour selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('',9,'black'), [{
      color: 'black',
      brand: 'Puma',
      price: 275,
      size: 9,
      in_stock: 3,
    }
   ]);
  });
  it("Return Shoe/shoes that match the brand and colour selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('Adidas','','white'), [{
      color: 'white',
      brand: 'Adidas',
      price: 275,
      size: 10,
      in_stock: 3,
    }
   ]);
  });
  it("Return Shoe/shoes that match the brand,colour and size selected", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('Adidas',10,'white'), [{
      color: 'white',
      brand: 'Adidas',
      price: 275,
      size: 10,
      in_stock: 3,
    }
   ]);
  });
  it("Return nothing if no match found", function() {
    let shoes = ShoeFinder();
    assert.deepEqual(shoes.shoeMatch('Adidas','','black'), []);
  });


});
