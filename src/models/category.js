const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const keyValue = require('./subschemas/keyvalue');

const categorySchema = new Schema({
    name: {
        type: String, required: true
    },
    desc: {
        type: String
    },
    attributes: {
        type: Schema.Types.Map,
        of: String
    },
    ecommerceLinks: [keyValue],
    source: {
        type: String, required: true
    },
    sourceUrl: String,
    sourceId: String,
    updated: Date
});

module.exports = mongoose.model('Category', categorySchema);