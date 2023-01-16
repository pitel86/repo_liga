const express = require('express');
const {getEquipos, getEquipo, postEquipos, putEquipos, deleteEquipos} = require('../controllers/equipo.controller');
const {isAuth} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getEquipos)
router.get('/:id', getEquipo)
router.post('/', [isAuth], postEquipos)
router.put('/:id', [isAuth], putEquipos)
router.delete('/:id', [isAuth], deleteEquipos)

module.exports = router;