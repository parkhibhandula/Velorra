const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const {registeredUser,loginUser} = require('../controllers/authController');

router.get('/',(req,res)=>{
    res.send("Hello User");
});
router.post('/register',registeredUser);

router.post('/login',loginUser);
module.exports = router;