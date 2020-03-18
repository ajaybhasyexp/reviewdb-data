const Product = require('../models/product');
const Review = require('../models/review');
const mongoose = require('mongoose');

module.exports.saveProduct = (product) => {
    Product.findOne({ sourceId: product.sourceId }).then((sameProd) => {
        if (sameProd) {
            sameProd.name = product.name;
            sameProd.description = product.description;
            sameProd.imageUrl = product.imageUrl;
            sameProd.category = product.category;
            sameProd.image_400 = product.image_400;
            sameProd.image_800 = product.image_800;
            sameProd.specs = product.specs;
            sameProd.maximumRetailPrice = product.maximumRetailPrice;
            sameProd.save();
            console.log(`Updating ${sameProd.name} with id ${sameProd._id}`);
        }
        else {
            var mProduct = new Product(product);
            mProduct.save();
            console.log(`Saving ${mProduct.name} with id ${mProduct._id}`);
        }
    });
}

module.exports.getProduct = (search) => {
    return Product.find({ "name": new RegExp(search, 'i') }).limit(5);
}

module.exports.getAllProducts = () => {
    return Product.find().exec();
}

module.exports.getProductById = (id) => {
    return Product.findById(id).exec();
}

module.exports.getAverageReview = (id) => {
    return Review.aggregate([{
        $match: {
            productId: mongoose.Types.ObjectId(id)
        }
    }, { $group: { _id: null, ratingavg: { $avg: "$rating" } } }]).exec();

}