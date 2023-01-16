//nombre
//pais
//posicion
//fechaNacimiento
//dorsal
//lesionado
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
    nombre: {type: 'string', required: true},
    pais:{type: 'string', required: true},
    posicion:{type: 'string'},
    edad:{type: 'number', required: true},
    dorsal:{type: 'number'},
    lesionado:{type: 'boolean'},
    imagen: {type: 'string'},
    imagen2: {type: 'string'}
},{
    timestamps: true
})

const Jugador = mongoose.model('jugador', jugadorSchema);

module.exports = Jugador;