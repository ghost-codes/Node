//importing product class or model
const Product = require('../models/product');


// get Add product page
exports.getAddProduct = (req, res, next) => {
    //... Respond
    res.render('add-product',
        {
            docTitle: "Add Product",
            path: "/admin/add-product"
        });
}

//post a new Product to shop
exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getShopProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop',
            {
                prods: products,
                docTitle: "Pug",
                path: "/"
            });
    });
}