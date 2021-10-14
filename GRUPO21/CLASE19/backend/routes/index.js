const express = require('express');
const router = express.Router(); // Este metodo nos devuelve el objeto router


const usuarioRouter = require("./usuario"); //Llamamos al manejador de rutas de usuario
// const articuloRouter = require("./articulo"); //Llamamos al manejador de rutas de articulo
// const categoriaRouter = require("./categoria"); //Llamamos al manejador de rutas de categoria



router.use('/usuario', usuarioRouter);
// router.use('/articulo', articuloRouter);
// router.use('/categoria', categoriaRouter);

module.exports = router