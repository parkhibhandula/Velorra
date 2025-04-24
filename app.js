const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongooseConnection')
const userRouter = require('./routes/userRouter');
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');
const indexRouter = require('./routes/index');
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//  Routes
app.use('/',indexRouter);
app.use('/users',userRouter);
app.use('/owners',ownerRouter);
app.use('/products',productRouter);

app.listen(3000);