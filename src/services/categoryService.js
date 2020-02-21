const Category = require('../models/category');

module.exports.getAllCategories = async () => {
    return Category.find().exec();
}

module.exports.saveCategory = (category) => {
    var cat = new Category(category);
    cat.updated = new Date();
    cat.save();
}

module.exports.checkAndSaveCategory = (category) => {
    Category.findOne({ sourceId: category.sourceId, source: category.source }).then
        ((cat) => {
            if (!cat) {
                this.saveCategory(category);
            }
            else {
                cat.sourceUrl = category.sourceUrl;
                cat.updated = new Date();
                cat.save();
            }
        });
}