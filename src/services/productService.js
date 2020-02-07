const Product = require('../models/product');

module.exports.saveProduct = (product) => {
    var product = new Product(product);
    product.save();
}

module.exports.getProduct = (search) => {
    return Product.find({ "name": new RegExp(search, 'i') }).exec();
}

module.exports.getAllProducts = () => {
    return Product.find().exec();
}