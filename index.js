var mongoose = require('mongoose');
const CategoryService = require('./src/services/categoryService');
const ProductService = require('./src/services/productService');
const ProdParseLogService = require('./src/services/prodParserLogService');
const UserService = require('./src/services/userService');
const EComVendor = require('./src/models/ecommercevendor');
const ReviewService = require('./src/services/reviewService');
const BrandService = require('./src/services/brandService');


module.exports.createConnection = (connection) => {
    mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports.CategoryService = CategoryService;
module.exports.ProductService = ProductService;
module.exports.ProdParseLogService = ProdParseLogService;
module.exports.UserService = UserService;
module.exports.ReviewService = ReviewService;
module.exports.BrandService = BrandService;

module.exports.getEcommerceVendor = (vendor) => {
    return EComVendor.findOne({ name: vendor });
} 