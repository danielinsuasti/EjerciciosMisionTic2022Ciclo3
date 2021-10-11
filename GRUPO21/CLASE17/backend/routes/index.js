const express = require('express');
const router = express.Router(); // Este metodo nos devuelve el objeto router


const usuarioRouter = require("./usuario"); //Llamamos al manejador de rutas de usuario

router.use('/usuario', usuarioRouter);

module.exports = router