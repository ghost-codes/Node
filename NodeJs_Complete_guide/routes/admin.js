//core node modules
const path = require('path');

//third party modules
const express = require('express');

//project modules
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => Get
router.get('/add-product', productsController.getAddProduct);


// /admin/add-product => Post
router.post('/add-product', productsController.postProduct);


module.exports.routes = router;
