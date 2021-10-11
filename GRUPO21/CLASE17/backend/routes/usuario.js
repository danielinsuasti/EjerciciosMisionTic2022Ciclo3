const express = require('express');
const router = express.Router(); // Este metodo nos devuelve el objeto router

//llamamos al controlador

const UsuarioController = require("../controllers/UsuarioController");

//metodos privados
router.post('/add', UsuarioController.add)

// metodos publicos
// router.post('/login', UsuarioController.login)



module.exports = router //sino exportamos las rutas no las vamos a poder utilizar