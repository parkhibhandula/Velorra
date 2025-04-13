const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.get('/',(req,res)=>{
    res.send("Velorra");
})
app.listen(3000);