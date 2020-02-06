const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ecommerceVendor = require('../ecommercevendor');
const ImageUrl = require('./imageurl');

const ecommerceSchema = new Schema({
    providerId: String,
    providerName: String,
    url: String,
    providerprice: Number,        
    inStock: Boolean
});

module.exports = ecommerceSchema;