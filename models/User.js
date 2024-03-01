const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        requires:true
    },
    userType:{
        type:String,
        requires:true
    }


});

module.exports = mongoose.model('User',UserSchema);