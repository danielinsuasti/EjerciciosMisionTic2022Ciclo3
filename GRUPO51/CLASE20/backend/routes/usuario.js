const express = require('express');
const router = express.Router(); // Este es un metodo que nos devuelve el objeto router

//llamamos el controlador

const UsuarioController = require('../controllers/UsuarioController');

//metodos privados

router.post('/add', UsuarioController.add);
router.get('/list', UsuarioController.list);
router.put('/update', UsuarioController.update);
router.put('/enabled', UsuarioController.enabled);
router.put('/disabled', UsuarioController.disabled);

//metodos publicos
router.post("/login", UsuarioController.login);



module.exports = router;