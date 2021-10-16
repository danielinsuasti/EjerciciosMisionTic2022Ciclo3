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

    list : async(req, res, next) => {
        try {

            const reg = await models.Usuario.find().sort({created:-1});
            res.status(200).json(reg);
            
        } catch (error) {
            res.status(500).send({
                message : "Ocurrio un error interno"
            });
            next(error);
            
        }
    },

    
    enabled : async(req, res, next) => {
        try {
            
            const reg = await models.Usuario.findByIdAndUpdate({_id : req.body._id},
                                                                {estado:1}) // Recibe dos atributos
            res.status(200).json(reg);
            
        } catch (error) {
            res.status(500).send({
                message : "Ocurrio un error interno"
            });
            next(error);
            
        }
    },

    disabled : async(req, res, next) => {
        try {
            
            const reg = await models.Usuario.findByIdAndUpdate({_id : req.body._id},
                                                                {estado:0}) // Recibe dos atributos
            res.status(200).json(reg);
            
        } catch (error) {
            res.status(500).send({
                message : "Ocurrio un error interno"
            });
            next(error);
            
        }
    },

    update : async(req, res, next) => {
        try {

            let passwd = req.body.password; // guardamos la contraseña de la solicitud en una variable
            const reg0 = await models.Usuario.findOne({_id:req.body._id}); // creamos registro donde voy a consultar el usuario

            //VALIDACION
            //Si la contraseña que llega a la petición es diferente a la que esta en la DB
            //Es porque el usuario cambio la contraseña

            if( passwd != reg0.password){
                req.body.password = await bcrypt.hash(req.body.password, 10);//Encriptar la contraseña
            }

            const reg = await models.Usuario.updateOne({_id :req.body._id}, { // Guardo el usuario en el modelo con los nuevos datos
                rol : req.body.rol,
                nombre : req.body.nombre,
                password : req.body.password // si no modifique el password,, que lo deje tal cual!
            })
            
            
            res.status(200).json(reg);
            
        } catch (error) {
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