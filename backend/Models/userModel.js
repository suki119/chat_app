const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    StaffId :{
        type: String,
        required : true,
        trim:true
    },
    StaffRole :{
        type: String,
        required : true,
        trim:true
    },
    Name: {
        type: String,
        required : true,
        trim:true
    }
   

},{timestamps:true});


const User = mongoose.model('User',userSchema);

module.exports = User;