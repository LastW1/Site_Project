const mongoose = require('mongoose');

const rateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId:{type: mongoose.Schema.Types.ObjectId,required : true}, 
    gameId:{type: mongoose.Schema.Types.ObjectId,required : true},
    value: {type: Number, required : true},
   
});

module.exports = mongoose.model('Rate', rateSchema);