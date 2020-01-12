const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productRef = new Schema({
    productName: String,
    productId: Schema.Types.ObjectId
});

module.exports = productRef;