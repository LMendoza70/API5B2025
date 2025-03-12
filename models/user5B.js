const mongoose = require('mongoose');

const user5bschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('user5b',user5bschema);