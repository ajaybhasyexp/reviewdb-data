const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryRef = new Schema({
    categoryName: String,
    categoryId: String
});

module.exports = categoryRef;