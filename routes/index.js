const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const productModel = require('../models/product');
const userModel = require('../models/userModel');
router.get('/',(req,res)=>{
    let error=req.flash('error');
    res.render('index',{error:'',loggedin:false});
})
router.get('/shop',isLoggedIn,async(req,res)=>{
    let success = req.flash('success');
    let products = await productModel.find();
    res.render('shop',{products:products,success:success});
})
router.get('/addtoCart/:id',isLoggedIn,async(req,res)=>{
let user = await userModel.findOne({email:req.user.email});
user.cart.push(req.params.id);
await user.save();
req.flash('success','Added to Cart');
res.redirect('/shop');
})
router.get('/cart',isLoggedIn,async(req,res)=>{
    let user = await userModel.findOne({email:req.user.email}).populate('cart');
res.render('cart',{user});
})
router.get('/profile',isLoggedIn,async(req,res)=>{
    res.render('profile',{user:req.user});
})
module.exports = router;