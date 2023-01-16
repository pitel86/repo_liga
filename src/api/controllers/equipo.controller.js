const Equipo = require('../models/equipo.model');

const getEquipos = async(req, res) => {
    try {
        const equipos = await Equipo.find();
        return res.status(200).json(equipos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getEquipo = async(req, res) => {
    try {
        const {id} = req.params;
        const equipos = await Equipo.findById(id).populate('jugadores'); //POPULATE coge los id's de tu campo y los busca en la otra tabla a través de la referencia (Schema.Types.ObjectId, ref: 'jugador')
        
        return res.status(200).json(equipos);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postEquipos = async(req, res) => {
    try {
        console.log(req._user.id);
        const newEquipo = new Equipo(req.body);
        const createdEquipo = await newEquipo.save();
        return res.status(201).json(createdEquipo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putEquipos = async(req, res) => {
    try {
        const {id} = req.params;
        const putEquipo = new Equipo(req.body);
        putEquipo._id = id;
        
        const updatedEquipo = await Equipo.findByIdAndUpdate(id, putEquipo, {new: true});
        return res.status(200).json(updatedEquipo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteEquipos = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedEquipo = await Equipo.findByIdAndDelete(id);
        return res.status(200).json(deletedEquipo);
    } catch (error) {
        
    }
}


module.exports = {getEquipos, getEquipo, postEquipos, putEquipos, deleteEquipos}