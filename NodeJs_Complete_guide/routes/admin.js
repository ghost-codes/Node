//core node modules
const path = require('path');

//third party modules
const express = require('express');

//project modules
const rootDir = require('../util/path');

const router = express.Router();

const products = [];



// /admin/add-product => Get
router.get('/add-product', (req, res, next) => {
    //... Respond
    res.render('add-product', { docTitle: "Add Product", path: "/admin/add-product" });
});


// /admin/add-product => Post
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(products);
    res.redirect('/');
});


module.exports.routes = router;
module.exports.products = products;