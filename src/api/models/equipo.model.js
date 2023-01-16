//nombre
//ciudad
//estadio
//jugadores
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipoSchema = new Schema(
    {
        nombre:{type: 'string', required: true},
        ciudad:{type: 'string'},
        estadio:{type: 'string'},
        jugadores: [ {type: Schema.Types.ObjectId, ref: 'jugador'}]
    },
    {
        timestamps:true
    }
)

const Equipo = mongoose.model('equipo', equipoSchema);

module.exports = Equipo;