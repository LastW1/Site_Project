const mongoose = require('mongoose');
const Rate = require("../models/rate");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required : true},
    price: {type: Number, required : true},
    category: {type: String, required : true},
    rate: {type: Number, required : true},
    rate_count: {type: Number, required : true},
 
});

module.exports = mongoose.model('Product', productSchema);