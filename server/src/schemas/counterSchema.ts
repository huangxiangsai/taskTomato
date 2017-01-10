const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let counterSchema = new Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});



export let Counter  =  mongoose.model('counter', counterSchema);