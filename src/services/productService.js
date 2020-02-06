const Product = require('../models/product');

module.exports.saveProduct = (product) => {
    var product = new Product(product);
    product.save();
}