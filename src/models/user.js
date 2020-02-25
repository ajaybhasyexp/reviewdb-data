const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String
    },
    socialId: { type: String, required: true },
    email: String,
    provider: { type: String, required: true }

});

module.exports = mongoose.model('users', userSchema);