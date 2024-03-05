const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const adminSchema = new mongoose.Schema({
    
    admin_id:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true
    },
    role:{
        type: String,
        required: true
    },
    club_id:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    email_address: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
	Admin,
};