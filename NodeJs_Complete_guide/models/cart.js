const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);


module.exports = class Cart {
    // constructor(){
    //     this.prodcuts= [];
    //     this.totalPrice = 0;
    // }

    static addProduct(id, productPrice) {

        //fetch old or previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {
                prodcuts: [],
                totalPrice: 0
            };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            //Analyze Cart  => Find existing product
            const existingProductIndex = cart.prodcuts.findIndex(p => p.id === id);
            const existingProduct = cart.prodcuts[existingProductIndex];

            //Add new product/ increase existing product quantity
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.prodcuts = [...cart.prodcuts];
                cart.prodcuts[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.prodcuts = [...cart.prodcuts, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        })
    }

}