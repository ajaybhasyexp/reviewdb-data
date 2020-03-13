const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {
        type: String, required: true
    },
    sideNote: {
        type: String, required: true
    },
    detailedDescription: {
        type: String
    },
    product_id: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    rating: {
        required: true,
        type: Number
    },
    updated: Date,
    created: Date,
	imageUrl:String

});

module.exports = mongoose.model('reviews', reviewSchema);