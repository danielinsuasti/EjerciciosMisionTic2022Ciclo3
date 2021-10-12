const express = require('express');
const router = express.Router(); // Este es un metodo que nos devuelve el objeto router

const usuarioRouter = require('./usuario'); // llamamos al manejador de rutas del usuario


router.use("/usuario", usuarioRouter); // Usamos el manejador de rutas del usuario

module.exports = router;