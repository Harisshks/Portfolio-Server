
const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const userData = mongoose.model("Users",projectSchema)
module.exports=userData; 
