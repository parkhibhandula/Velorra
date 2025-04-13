const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fullName:{
        type:String,
        minLength:2,
        trim:true
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})
module.exports = mongoose.model('user',schema);