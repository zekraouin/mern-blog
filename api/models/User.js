const mongoose = require('mongoose'); // Erase if already required
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    password:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        required: true,
        default:new Date().toISOString()
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);