const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodParseLog = new Schema({
    vendorId: String,
    data: String,
    dataUrl: String,
    error: Object
});

module.exports = mongoose.model('prodparselogs', prodParseLog);