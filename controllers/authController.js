const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {generateToken}= require('../utils/generateToken');
const userModel = require('../models/userModel');

module.exports.registeredUser = async(req,res)=>{
    let{fullname,email,password,}= req.body;
    let existingUser = await userModel.find({email:email})
    if (existingUser.length > 0) {
        return res.render('index', { error: "User already exists! Please Login" });
    }
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            if(err){
                return res.send(err.message);
            }
            else{
                let user = await userModel.create({
                    fullname,
                    email,
                    password:hash
                })
                let token = generateToken(user);
                res.cookie('token',token);
               res.render('shop');
            }
        })
    })
}

module.exports.loginUser = async(req,res)=>{
    let{email,password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user){
        return res.render('/',{error:'Incorrect email or password'});
    }
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            let token = generateToken(user);
            res.cookie('token',token);
            res.render('shop');
        }
        else{
            res.render('/',{error:'Incorrect email or password'});
        }
    })
}