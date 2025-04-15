const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner');
router.get('/',(req,res)=>{
    res.send("Hello Owner");
});

module.exports = router;