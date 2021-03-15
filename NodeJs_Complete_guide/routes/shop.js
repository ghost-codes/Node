//node core modules
const express = require('express');
const path = require('path');

//third party modules
const router = express.Router();

//project modules
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

// Shop homepage => GET
router.get('/', productsController.getShopProducts);

module.exports = router;