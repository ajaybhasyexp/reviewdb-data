const Product = require('../models/product');

module.exports.saveProduct = (product) => {
    // Product.findOne({ _id: product._id }).then((sameProd) => {
    //     if (sameProd) {
    //         console.log(`Updating ${sameProd.name} with id ${sameProd._id}`);
    //         sameProd.name = product.name;
    //         sameProd.description = product.description;
    //         sameProd.imageUrl = product.imageUrl;
    //         sameProd.category = product.category;
    //         sameProd.maximumRetailPrice = product.maximumRetailPrice;
    //         await sameProd.save();
    //     }
    //     else {
    //         var mProduct = new Product(product);
    //         await mProduct.save();
    //         console.log(`Saving ${mProduct.name} with id ${mProduct._id}`);
    //     }

    // }).catch((error) => {
    //     console.log(`Error while saving ${product.name} with Id ${product._id}`);
    // });
    // Product.findByIdAndUpdate(product._id, product, { upsert: true }).exec();

    // Product.update({ "_id": product._id }, {
    //     name: product.name,
    //     description: product.description,
    //     imageUrl: product.imageUrl,
    //     category: product.category,
    //     maximumRetailPrice: product.maximumRetailPrice
    // }, function (err, numberAffected, rawResponse) {
    //     if (err) {
    //         console.log(`Error while updating product ${product._id}`);
    //         console.log(err);
    //     }
    //     if (numberAffected != 1) {
    //         console.log(`More than one product updated ${product._id}`);
    //     }
    // }).exec();
    try {
        const doc = Product.findOne({ sourceId: product.sourceId });
        if (doc) {
            console.log(`Updating ${doc.name} with id ${doc.sourceId}`);
            doc.name = product.name;
            doc.description = product.description;
            doc.imageUrl = product.imageUrl;
            doc.category = product.category;
            doc.maximumRetailPrice = product.maximumRetailPrice;
            doc.save();
        }
        else {
            var mProduct = new Product(product);
            mProduct.save();
            console.log(`Saving ${product.name} with id ${product.sourceId}`);
        }
    } catch (error) {
        console.log(`Error while saving product ${product.sourceId}`);
        console.log(error);
    }
}

module.exports.getProduct = (search) => {
    return Product.find({ "name": new RegExp(search, 'i') }).limit(5);
}

module.exports.getAllProducts = () => {
    return Product.find().exec();
}