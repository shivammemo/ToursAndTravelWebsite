var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({

    username:String,
    name:String,
    password:String,
    country:String,
    gender:String,
    address:String,
    mobile:Number,
    dob:Date,
    bio:String,
    email:String
});

UserSchema.plugin(passportLocalMongoose);
  
module.exports = mongoose.model("User",UserSchema);