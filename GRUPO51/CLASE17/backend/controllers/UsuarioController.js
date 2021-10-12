const models = require("../models");
const bcrypt = require('bcryptjs');


module.exports = {
    add : async(req, res, next) => {
        try {

            checkEmail = await models.Usuario.findOne( { correo : req.body.correo});// Variable para validar si el correo existe
            if(!checkEmail){
                req.body.password = await bcrypt.hash(req.body.password, 10); // Encriptar la contraseña
                const reg = await models.Usuario.create(req.body);
                res.status(200).json(reg);
            }else{
                res.status(400).send({
                    message : "El usuario ya existe!"
                })
            }            
            
        } catch (error) {
            res.status(500).send({
                message : "Ocurrio un error Interno"
            });
            next(error);            
        }

    },

    login : async() => {

    }
}