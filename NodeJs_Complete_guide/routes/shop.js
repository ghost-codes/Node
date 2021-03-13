//node core modules
const express = require('express');
const path = require('path');

//third party modules
const router = express.Router();

//project modules
const rootDir = require('../util/path');
const adminData = require('./admin');

// Shop homepage => GET
router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, docTitle: "Pug", path: "/" });
});

module.exports = router;