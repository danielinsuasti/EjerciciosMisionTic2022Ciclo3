const models = require("../models");
const bcrypt = require("bcryptjs");
const token = require("../services/token")


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

    login : async(req, res, next) => {
        try {
            checkUser = await models.Usuario.findOne({
                correo : req.body.correo,
                estado : 1
            }); // Variable para validar si el usuario existe, y el estado es 1
            if(checkUser){//Comparar contraseñas
                let match = await bcrypt.compare(req.body.password, checkUser.password ); //Compara las contraseñas

                if(match){// si las contraseñas coinciden generariamos un token
                    let tokenReturn = await token.encode(checkUser);
                    res.status(200).json({checkUser, tokenReturn});
                    // res.status(200).json({checkUser})
                }else{//Si las contraseñas NO coinciden
                    res.status(401).send({ 
                        message : "Usuario No autorizado"
                    })

                }

            }else{// Si el usuario no existe
                res.status(404).send({
                    message:"Usuario no encontrado"
                });

            }

            
        } catch (error) {
            console.log(error);
            next(error)            
        }

    }
}