const Jugador = require('../models/jugador.model')
const {deleteFile} = require('../../middleware/delete.file');

const getJugadores = async(req, res) => {
    try {
        const jugadores = await Jugador.find();
        return res.status(200).json(jugadores);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postJugadores = async(req, res) => {
    try {
        const newJugador = new Jugador(req.body);

        // if(req.file){
        //     newJugador.imagen = req.file.path
        // }

        if(req.files.imagen){
            newJugador.imagen = req.files.imagen[0].path
        }
        if(req.files.imagen2){
            newJugador.imagen2 = req.files.imagen2[0].path
        }
        const createdJugador = await newJugador.save();
        return res.status(201).json(createdJugador);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putJugadores = async(req, res) => {
    try {
        console.log(req.body);
        const {id} = req.params;
        const putJugador = new Jugador(req.body);
        putJugador._id = id;
        
        if(req.file){
            putJugador.imagen = req.file.path
        }
        const updatedJugador = await Jugador.findByIdAndUpdate(id, putJugador);
        deleteFile(updatedJugador.imagen);
        return res.status(200).json(putJugador);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteJugadores = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedJugador = await Jugador.findByIdAndDelete(id);
        deleteFile(deletedJugador.imagen);
        return res.status(200).json(deletedJugador);
    } catch (error) {
        
    }
}


module.exports = {getJugadores, postJugadores, putJugadores, deleteJugadores}