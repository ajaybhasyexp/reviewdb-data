const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {
        type: String, required: true
    },
    sideNote:{
        type:String,required:true
    },
    detailedDescription:{
        type: String
    }

});