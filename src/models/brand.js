const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    updated: Date,
    created: Date,
    imageUrl: String,
    source: String,
    tags: [String]
});

module.exports = mongoose.model('brand', brandSchema);