const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ecommerceVendor = new Schema({
    _id: String,
    name: String,
    logoUrl: String,
    vendorUrl: String
});
module.exports = mongoose.model('ecommercevendor', ecommerceVendor);