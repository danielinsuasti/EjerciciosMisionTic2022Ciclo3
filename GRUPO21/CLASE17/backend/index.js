const express = require('express'); //ecmaScript 5, 
//import express from 'express'
var morgan = require('morgan');
var cors = require('cors');
const app = express();
const apiRouter = require("./routes"); // Agregar /api para la ruta
const mongoose = require('mongoose');


app.use(morgan('dev'));
app.use(cors());

//PARA PETICIONES TIPO PUT Y POST
app.use(express.json()); // Me permite enviar y recibir respuestas tipo json
app.use(express.urlencoded({ extended : true })) // para permitir que las envie por URL-encoded


// //Manejador de peticiones / rutas
// app.get('/', function (req, res) {
//   // res.send('Hello World') // Devolver un mensaje, un JSon, un codigo de status
//   res.status(200).json(    {     
//     "respuesta" : "UN JSON"
//   })
// })

//CONEXION A LA DB

urlDB = "mongodb://localhost:27017/portafolio21"

mongoose.Promise = global.Promise;

mongoose.connect(urlDB)
.then(mongoose => console.log("DB conectada al puerto 27017"))
.catch(err => console.log(err))


app.use('/api', apiRouter);//Agregamos '/api' a la ruta
 
//app.listen(3000)
app.set('PORT', process.env.PORT || 3000); 

app.listen(app.get('PORT'), () => {
    console.log(`Corriendo en http://localhost:${app.get('PORT')}`); 
} )