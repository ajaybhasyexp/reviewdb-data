const Category = require('./src/models/category');
var mongoose = require('mongoose');

module.exports.createConnection = (connection) => {
    mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports.getAllCategories = () => {
    console.log("Calls for database");
    return Category.find();
}

module.exports.saveCategory = (category) => {
    var cat = new Category(category);
    cat.save();
}

