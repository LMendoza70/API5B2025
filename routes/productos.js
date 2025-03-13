const express=require('express');
const rutaproducto=express.Router();
const producto=require('../models/producto');

//primer ruta para obtener el listado de usuarios
rutaproducto.get('/api/productos', async (req,res)=>{
    try{
        const lista=await producto.find();
        res.json(lista);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//segunda ruta para insertar un usuario

rutaproducto.post('/api/productos', async (req,res)=>{
    const product=new producto({
        name:req.body.name,
        categoria:req.body.categoria,
        inventario:req.body.inventario
    });
    try{
        const nuevoproducto=await product.save();
        res.status(201).json(nuevoproducto);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//exportamos la ruta
module.exports=rutaproducto;