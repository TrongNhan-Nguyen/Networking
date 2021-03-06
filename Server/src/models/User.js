const mongoose = require('mongoose');
const schema = mongoose.Schema;
const User = new schema({
    name:{type:String, required:true, index:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true, unique:true},
});
module.exports = mongoose.model("User",User);