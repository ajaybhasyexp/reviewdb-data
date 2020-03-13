const Review = require('../models/review');

module.exports.saveReview = (review) => {
    var newReview = new Review(review);
    newReview.updated = new Date();
    newReview.save();
}