const User = require('../models/User');
const addCart = async (req, res, next) => {
  try {
    const {userID, productID} = req.body;
    const user = await User.findById(userID);
    const cartList = [...user.cart];
    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i] == productID) {
        return res.status(203).send({data: 'This product is already exists'});
      }
    }
    user.cart.push(productID);
    await user.save();
    return res.status(201).send({data: user});
  } catch (error) {
    next(error);
  }
};
const getCartList = async (req, res, next) => {
  try {
    const {userID} = req.query;
    const user = await User.findById(userID).populate('cart');
    return res.send({data: user.cart});
  } catch (error) {
    next(error);
  }
};
const clearCart = async (req, res, next) => {
  try {
    const {userID} = req.query;
    const user = await User.findById(userID);
    user.cart = [];
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};
const deleteItem = async (req, res, next) => {
  try {
    const {productID, userID} = req.query;
    const user = await User.findById(userID);
    const cartList = user.cart;
    const index = cartList.findIndex((item) => item == productID);
    cartList.splice(index, 1);
    user.cart = cartList;
    await user.save();
    return res.status(201).send({data: user.cart});
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addCart,
  clearCart,
  deleteItem,
  getCartList,
};
