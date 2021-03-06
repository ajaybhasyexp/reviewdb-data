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
    image_400: String,
    image_800: String,
    createdBy: Object,
    category: Object,
    ecommerceDetails: Object,
    maximumRetailPrice: Number,
    sourceId: String,
    specs: [String],
    updated: { type: Date, default: new Date() },
    brand: String

});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;