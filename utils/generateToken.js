const jwt = require('jsonwebtoken');
const generateToken = (user) =>{
    return  jwt.sign({email:user.email,id:user._id,name:user.fullname}, process.env.JWT_KEY);
}
module.exports.generateToken = generateToken;