const mongoose = require('mongoose');
const dbg = require('debug')('development:mongoose');
const config = require('config');
mongoose.
connect(`${config.get('MONGODB_URI')}/velorra`)
.then(function(){
   dbg('Connection setup');
})
.catch((err)=>{
   dbg(err);
})
module.exports = mongoose.connection;