const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keyValue = new Schema({
    key: String,
    value: String
});

module.exports = keyValue;