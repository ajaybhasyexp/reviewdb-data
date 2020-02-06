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
    createdBy: [ActionUser],
    category: [CategoryRef],
    ecommerceDetails: [EcommerceDetails],
    maximumRetailPrice: Number

});
module.exports = mongoose.model('Product', productSchema);