const mongoose = require('mongoose');
const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};



const usuarioSchema = new Schema({
    nombre : {
        type : String,
        required : true,
        maxlength : 100
    },
    correo : {
        type : String,
        required : true,
        maxlength : 100,
        trim : true, // si mandan espacios en blanco, el los quita
        unique : true, // para validar que cada correo sea único
        lowercase : true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : true,
        maxlength : 100,
        minlength : 8,

    },
    estado : {
        type : Number,
        default : 1
    } ,
    rol : {
        type : String,
        required : true,
        enum : ["Administrador", "Gestor"] //Validador, respuesta de error en DB
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})


//Lo convertimos a un modelo y lo exportamos

const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;