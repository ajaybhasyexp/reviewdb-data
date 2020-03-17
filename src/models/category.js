const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String, required: true
    },
    desc: {
        type: String
    },
    attributes: [String],
    ecommerceLinks: Object,
    source: {
        type: String, required: true
    },
    sourceUrl: String,
    sourceId: String,
    updated: Date
});

module.exports = mongoose.model('Category', categorySchema);