const express = require('express');
const router = express.Router(); // Este es un metodo que nos devuelve el objeto router

const usuarioRouter = require('./usuario'); // llamamos al manejador de rutas del usuario
// const articuloRouter = require('./articulo'); // llamamos al manejador de rutas del articulo
// const categoriaRouter = require('./categoria'); // llamamos al manejador de rutas del categoria


router.use("/usuario", usuarioRouter); // Usamos el manejador de rutas del usuario
// router.use("/articulo", articuloRouter); // Usamos el manejador de rutas del articulo
// router.use("/categoria", categoriaRouter); // Usamos el manejador de rutas del categoria

module.exports = router;