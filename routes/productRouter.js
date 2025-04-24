const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Product");
});
router.get('/items',async(req,res)=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => res.send(data));
})

module.exports = router;