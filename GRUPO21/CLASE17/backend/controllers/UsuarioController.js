const models = require("../models");
const bcrypt = require("bcryptjs");


//parte privada

//parte publica

module.exports = {
    add : async(req, res, next) => {
        try {
            
            checkEmail = await models.Usuario.findOne({correo : req.body.correo});// Variable para validar si el correo existe

            if(!checkEmail){//Si no existe el usuario
                req.body.password = await bcrypt.hash(req.body.password, 10);//Encriptar la contraseña
                const reg = await models.Usuario.create(req.body)//registra los datos en el server
                res.status(200).json(reg)
            }else{
                res.status(404).send({
                    message : "El usuario ya existe"
                })
            }
        } catch (error) { // En caso de que ocurra un error
            res.status(500).send({
                message : "Ocurrio un error interno"
            });
            next(error);
        }

    },

    login : async() => {

    }
}