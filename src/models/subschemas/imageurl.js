const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageUrl = new Schema({
    thumbnailSize: String,
    normalSize: String,
    bigSize: String
});