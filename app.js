require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const rutauser=require('./routes/users5b');
const rutaproducto=require('./routes/productos');


//declaramos nuestra variable app para manejar express
const app=express();
const port=process.env.PORT||3000;

//creamos el midleware para que nuestra api maneje json
app.use(express.json());

//primer endtponit en raiz / 
app.get('/',(req,res)=>{
  res.send('Hola 5B...');
})
//agregamos el endtpoint de la ruta usuarios 
app.use(rutauser);
app.use(rutaproducto);


//creamos el listener del puerto
app.listen(port,()=>{
  console.log('La app esta corriendo en el puerto '+port+'...');
})
//conectamos a mongo atlas 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));
  