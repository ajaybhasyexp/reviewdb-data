const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategoryRef = require('./subschemas/categoryref');
const ActionUser = require('./subschemas/actionuser');
const EcommerceDetails = require('./subschemas/ecommercedetails');


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: String,
    createdBy: Object,
    category: Object,
    ecommerceDetails: Object,
    maximumRetailPrice: Number,
    sourceId: String,
    updated: { type: Date, default: new Date() }

});

const ProductModel = mongoose.model('Product', productSchema);

// productSchema.pre('save', function (next) {
//     var self = this;
//     ProductModel.find({ sourceId: self.sourceId }, function (err, docs) {
//         if (!docs.length) {
//             next();
//         } else {
//             console.log('product exists: ', self.name);
//             next(new Error("product exists!"));
//         }
//     });
// });
module.exports = ProductModel;