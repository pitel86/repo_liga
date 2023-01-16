const express = require('express');
const upload = require('../../middleware/upload.file');
const {getJugadores, postJugadores, putJugadores, deleteJugadores} = require('../controllers/jugador.controller');
const router = express.Router();

router.get('/', getJugadores)
// router.post('/', upload.single('imagen'),  postJugadores)
router.post('/', upload.fields([{name: 'imagen'}, {name:'imagen2'}]),  postJugadores)
router.put('/:id', upload.single('imagen'), putJugadores)
router.delete('/:id', deleteJugadores)

module.exports = router;