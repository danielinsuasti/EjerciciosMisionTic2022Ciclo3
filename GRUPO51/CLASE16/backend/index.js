const express = require('express') // emacScript 5, y el import ecmacScript6
//import express from 'express'
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const apiRouter = require('./routes'); // Agregar /api a la ruta
const mongoose = require('mongoose');
 

app.use(morgan('dev'))
app.use(cors())

//Para peticiones tipo PUT y POST
app.use(express.json());
app.use(express.urlencoded( { extended:true } ))




//Manejador de Peticiones/Rutas
// app.get('/', function (req, res) {
//   // res.send('Hello World') //Devolver un mensaje, Json, CodigoStatus
//   res.status(200).json(
//     {
//       "mensaje" : "Devolucion de un json"
//   })
// })

//CONEXION A LA DB
const urlDB = "mongodb://localhost:27017/portafolio51"

mongoose.Promise = global.Promise;
mongoose.connect(urlDB)
.then(mongoose => console.log("DB conectada en el puerto 27017"))
.catch(err => console.log(err))




app.use('/api', apiRouter);

 
//app.listen(3000)
app.set('PORT', process.env.PORT  || 3000);

app.listen(app.get('PORT'), () =>{
  console.log(`Corriendo en http://localhost:${app.get('PORT')}`)
})

