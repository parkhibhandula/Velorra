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
const expressSession = require('express-session');
const flash = require('connect-flash');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.JWT_KEY
})
);
app.use(flash());
app.set('view engine','ejs');

//  Routes
app.use('/',indexRouter);
app.use('/users',userRouter);
app.use('/owners',ownerRouter);
app.use('/products',productRouter);

app.listen(3000);