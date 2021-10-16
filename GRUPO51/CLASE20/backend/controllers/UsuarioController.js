const models = require("../models");
const bcrypt = require('bcryptjs');
const token = require("../services/token")


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

    list : async(req, res, next) => {
        try {
            // let valor = req.query.valor;
            const reg = await models.Usuario.find().sort({created:-1});
            res.status(200).json(reg);
            // const reg = await models.Usuario.find({ $or: [
            //                                                 { 'nombre': new RegExp(valor, 'i')},
            //                                                 {'correo': new RegExp(valor, 'i')}
            //                                                 {'rol': new RegExp(valor, 'i') }]})
            // .sort({'createdAt':-1});
            
        } catch (error) {

            res.status(500).send({
                message : "Ocurrio un error Interno"
            });
            next(error); 
            
        }

    },
    enabled : async(req, res, next) => {
        try {

            const reg = await models.Usuario.findByIdAndUpdate( {_id:req.body._id},
                                                                {estado:1})

            res.status(200).json(reg);
   
        } catch (error) {

            res.status(500).send({
                message : "Ocurrio un error Interno"
            });
            next(error);             
        }
    },

    disabled : async(req, res, next) => {
        try {

            const reg = await models.Usuario.findByIdAndUpdate( {_id:req.body._id},
                                                                {estado:0})

            res.status(200).json(reg);
   
        } catch (error) {

            res.status(500).send({
                message : "Ocurrio un error Interno"
            });
            next(error);             
        }
    },

    update : async(req, res, next) => {
        try {

            let passwd = req.body.password; // guardar la contraseña de la solicitud en una variable
            const reg0 = await models.Usuario.findOne({_id : req.body._id})//Crear un registro donde vamos a hacer una consulta del usuario

            //VALIDACION
            //Si la contraseña que llega en la petición es diferente a la que esta en la DB
            //Es porque el usuario cambio la contraseña

            if(passwd !=  reg0.password){
                req.body.password = await bcrypt.hash(req.body.password, 10); // Encriptar la contraseña
            }

            const reg = await models.Usuario.updateOne({_id:req.body._id},
                {
                    rol: req.body.rol,
                    nombre: req.body.nombre,
                    password: req.body.password //Si no modificamos el password, lo dejamos tal cual!

                });
                res.status(200).json(reg)            
   
        } catch (error) {

            res.status(500).send({
                message : "Ocurrio un error Interno"
            });
            next(error);             
        }
    },


    login : async(req, res, next) => {
        try {
            checkUser = await models.Usuario.findOne( {//Variable para validar si el usuario existe, y el estado es 1
                correo : req.body.correo,
                estado : 1
            } )

            if(checkUser){ //empezar a comparar las contraseñas
                let match = await bcrypt.compare(req.body.password, checkUser.password); //comparar contraseñas

                if( match ){ // si las contraseñas coinciden, vamos a generar el token
                    //generemos un token con los datos de la sesion                    
                    // res.status(200).json({checkUser});
                    let tokenReturn = await token.encode(checkUser);
                    res.status(200).json({checkUser, tokenReturn})

                }else{ // si las constraseñas no coinciden
                    res.status(401).send({ // Contraseña incorrecta
                        message : "Usuario no autorizado"
                    })
                }

            }else{// si el usuario no existe
                res.status(404).send({
                    message : "Usuario no encontrado"
                })
            }            
        } catch (error) { 
            console.log(error);
            next(error);
            
        }

    }
}