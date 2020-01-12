const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ecommerceVendor = new Schema({
    name: String,
    logoUrl: String
});
module.exports = mongoose.model('ecommercevendor', ecommerceVendor);