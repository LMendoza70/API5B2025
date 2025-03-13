const mongosse = require('mongoose');

const productoschema=new mongoose.Schema({
    categoria:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true
    },
    inventario:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model('producto5b',productoschema);