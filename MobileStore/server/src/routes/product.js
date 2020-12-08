const express = require('express');
const route = express.Router();
const productController = require('../controllers/product');
route.post('/add', productController.addProduct);
route.get('/products', productController.productList);
module.exports = route;
