const express = require('express');
const router = express.Router(); // Este es un metodo que nos devuelve el objeto router

//llamamos el controlador

const UsuarioController = require('../controllers/UsuarioController');

//metodos privados

router.post('/add', UsuarioController.add);

//metodos publicos
router.post("/login", UsuarioController.login);



module.exports = router;