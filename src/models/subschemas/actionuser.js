const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionUser = new Schema({
    userName: String,
    date: { type: Date, default: Date.now },
    userId: Schema.Types.ObjectId
});

module.exports = actionUser;