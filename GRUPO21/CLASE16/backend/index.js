const express = require('express') //ecmaScript 5, 
//import express from 'express'
const app = express()


//Manejador de peticiones / rutas
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)