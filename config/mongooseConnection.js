const mongoose = require('mongoose');
mongoose.
connect("mongodb://127.0.0.1:27017/velorra")
.then(function(){
    console.log('Connection setup');
})
.catch((err)=>{
    console.log(err);
})
module.exports = mongoose.connection;