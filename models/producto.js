const mongosse = require('mongoose');

const productoschema= new mongosse.Schema({
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

module.exports=mongosse.model('producto5b',productoschema);