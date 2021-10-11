const mongoose = require('mongoose');
const { Schema } = mongoose;


const categoriaSchema = new Schema({
    nombre : {
        type : String,
        required : true,
        maxlength : 100
    },
    descripcion : {
        type : String,
        required : true,
        maxlength : 100,        
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})


//Lo convertimos a un modelo y lo exportamos

const Categoria = mongoose.model('categoria', categoriaSchema);

module.exports = Categoria;