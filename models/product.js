const mongoose = require('mongoose');
const schema = mongoose.Schema({
    productName:String,
    productPrice:Number,
    productImage:String,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String
})
module.exports = mongoose.model('product',schema);