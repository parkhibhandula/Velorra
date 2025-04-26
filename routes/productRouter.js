const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config')
const productModel = require('../models/product');
router.get('/',(req,res)=>{
    res.send("Product");
});
router.get('/items',async(req,res)=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => res.send(data));
})
router.post('/create',upload.single("image"),async(req,res)=>{
let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body;
if(!req.file){
    return res.redirect('/owners/adminPanel');
}
let data = await productModel.create({
    image:req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor
})
req.flash('success','Product created successfully');
res.redirect('/owners/adminPanel');
})

module.exports = router;