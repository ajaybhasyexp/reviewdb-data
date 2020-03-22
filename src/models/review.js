const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {
        type: String, required: true
    },    
    detailedDescription: {
        type: String
    },
    product:Object,
    rating: {
        required: true,
        type: Number
    },
    updated: Date,
    created: Date,
    imageUrl: String,
    userSocialId: String

});

module.exports = mongoose.model('reviews', reviewSchema);