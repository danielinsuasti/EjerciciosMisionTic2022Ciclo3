const express = require('express') // emacScript 5, y el import ecmacScript6
//import express from 'express'
const app = express()
var morgan = require('morgan')
 

app.use(morgan('dev'))

//Manejador de Peticiones/Rutas
app.get('/', function (req, res) {
  res.send('Hello World') //Devolver un mensaje, Json, CodigoStatus
})
 
app.listen(3000)