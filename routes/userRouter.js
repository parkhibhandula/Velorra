const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const {registeredUser,loginUser, logoutUser} = require('../controllers/authController');

router.get('/',(req,res)=>{
    res.send("Hello User");
});
router.post('/register',registeredUser);

router.post('/login',loginUser);
router.get('/logout',logoutUser);
module.exports = router;