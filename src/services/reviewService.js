const Review = require('../models/review');

module.exports.saveReview = (review) => {
    var newReview = new Review(review);
    newReview.updated = new Date();
    newReview.created = new Date();
    newReview.save();
    return newReview;
}

module.exports.getReviews = () => {
    return Review.find().exec();
}

module.exports.getProductReviews = (productId) => {
    return Review.find({ productId: productId }).exec();
}

module.exports.getUserProductReview = (prodId, userId) => {
    return Review.find({ productId: prodId, userSocialId: userId }).exec();
}
module.exports.getreviewsByCategory = (categoryId,limit) => {
    const limits=Number(limit);
    return Review.find({"product.categoryId":categoryId }).limit(10).exec();
    
}