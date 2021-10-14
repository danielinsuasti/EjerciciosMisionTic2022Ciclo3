const mongoose = require('mongoose');
const { Schema } = mongoose;

const articuloSchema = new Schema({
    categoria: {
        type: Schema.ObjectId, ref:'categoria'
    },
    codigo: {
        type: String,
        maxlength: 64,
        unique : true
    },
    nombre: {
        type : String,
        required : true,
        maxlength : 100,
        unique : true 
    }, // String is shorthand for {type: String}
    descripcion: {
        type : String,
        required : true,
        maxlength : 255,
    },
    estado: {
        type : Number,
        default : 1     
    },
    createAt: { 
        type: Date, 
        default: Date.now 
    },
  });

//   Convertirlo en un modelo

const Articulo = mongoose.model('articulo', articuloSchema);

module.exports = Articulo;