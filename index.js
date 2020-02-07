var mongoose = require('mongoose');
const CategoryService = require('./src/services/categoryService');
const ProductService = require('./src/services/productService');
const ProdParseLogService = require('./src/services/prodParserLogService');
const EComVendor = require('./src/models/ecommercevendor');
const Category = require('./src/models/category');


module.exports.createConnection = (connection) => {
    mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports.CategoryService = CategoryService;
module.exports.ProductService = ProductService;
module.exports.ProdParseLogService = ProdParseLogService;


module.exports.getEcommerceVendor = (vendor) => {
    return EComVendor.findOne({ name: vendor });
}