const User = require('../models/user');

module.exports.checkAndSaveUser = (user) => {
    User.findOne({ socialId: user.socialId }).then((sameUser) => {
        if (sameUser) {
            sameUser.photoUrl = user.photoUrl;
            sameUser.save();
        }
        else {
            var saveUser = new User(user);
            saveUser.save();
        }
    });
}

module.exports.getAllUsers = () => {
    return User.find().exec();
}