const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cart');
route.post('/add',cartController.addCart);
route.get('/cartList',cartController.getCartList);
route.get('/delete',cartController.deleteItem);
route.get('/clear',cartController.clearCart);
module.exports = route;
