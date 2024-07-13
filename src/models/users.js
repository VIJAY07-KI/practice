const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    hash : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    },
    PhoneNumber : {
        type : String,
        required : false
    }

})

const User = mongoose.model('user',userSchema, 'user')

module.exports = User