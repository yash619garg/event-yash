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
const clubSchema = new mongoose.Schema({
    club_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    club_name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    club_logo_url:{
        type: URL,
        
    },
    category:{
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    cooridnator_name:{
        type: String,
    },
    club_urls:{
        type: URL,

    },
    club_discription:{
        type: String,
        required: true
    }

});



const Admin = mongoose.model('Admin', adminSchema);
const Club = mongoose.model('Club', clubSchema);

module.exports = {
	Admin,
    Club
};