const express = require('express') //ecmaScript 5, 
//import express from 'express'
var morgan = require('morgan')
const app = express()



app.use(morgan('dev'))

//Manejador de peticiones / rutas
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)