const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:2,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})
module.exports = mongoose.model('user',schema);