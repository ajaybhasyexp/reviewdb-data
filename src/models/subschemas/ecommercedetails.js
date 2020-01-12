const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ecommerceVendor = require('../ecommercevendor');
const ImageUrl = require('./imageurl');

const ecommerceSchema = new Schema({
    providerId: Schema.Types.ObjectId,
    providerName: String,
    url: String,
    providerprice: Number,
    providerimage: ImageUrl,
    providerId: String,
    inStock: Boolean
});

module.exports = ecommerceSchema;