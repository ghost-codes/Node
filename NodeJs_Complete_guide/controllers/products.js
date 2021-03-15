const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getShopProducts = (req, res, next) => {
    res.render('shop',
        {
            prods: products,
            docTitle: "Pug",
            path: "/"
        });
}

module.exports.products = products;