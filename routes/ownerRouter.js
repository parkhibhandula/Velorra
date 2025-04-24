const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner');
router.get('/',(req,res)=>{
    res.send("Hello Owner");
});

if(process.env.NODE_ENV== 'development'){
router.post('/create',async(req,res)=>{
let owner = await ownerModel.find();
if(owner.length>0){
    res.status(503).send("You do not have permission to create account");
}
else{
    let created = await ownerModel.create({
        fullname:'Parkhi',
        email:'parkhi@gmail.com',
        password:'xyz123$'
    })
    res.send(created);
}
})
}
module.exports = router;