const Product = require('../models/Product');

const addProduct = async (req, res, next) => {
  try {
    const {name} = req.body;
    const product = await Product.findOne({name});
    if (product) {
      return res.send(name + ' is already exists');
    }
    await new Product(req.body).save();
    return res.send(req.body);
  } catch (error) {
    next(error);
  }
};
const productList = async (req, res, next) => {
  try {
    const {cate} = req.query;
    if (cate == 'All') {
      const data = await Product.find({});
      return res.status(201).send({data});
    }

    const data = await Product.find({category: cate});
    return res.status(201).send({data});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  productList,
};
