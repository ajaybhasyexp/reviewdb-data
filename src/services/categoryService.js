const Category = require('../models/category');
const invalidCats = ['kids_footwear', 'jewellery', 'automotive', 'home_entertainment', 'kids_clothing', 'womens_footwear',
    'luggage_travel', 'home_improvement_tools', 'toys', 'home_furnishing', 'software', 'video_players', 'fragrances', 'tv_video_accessories',
    'computer_storage', 'landline_phones', 'e_learning', 'network_components', 'music_movies_posters', 'furniture',
    'sunglasses', "household_supplies", "eyewear", "womens_clothing", "home_and_kitchen_needs", "stationery_office_supplies",
    "home_decor_and_festive_needs", "food_nutrition","mens_clothing", "bags_wallets_belts", "computer_components", "camera_accessories"];

module.exports.getAllCategories = async () => {
    return Category.find().exec();
}

module.exports.saveCategory = async (category) => {
    var cat = new Category(category);
    cat.updated = new Date();
    cat.save();
}

module.exports.checkAndSaveCategory = async (category) => {
    Category.findOne({ sourceId: category.sourceId, source: category.source }).then
        ((cat) => {
            if (!cat) {
                if (!invalidCats.includes(category.desc))
                    this.saveCategory(category);
            }
            else {
                cat.sourceUrl = category.sourceUrl;
                cat.name = category.name;
                cat.updated = new Date();
                cat.save();
            }
        });
}