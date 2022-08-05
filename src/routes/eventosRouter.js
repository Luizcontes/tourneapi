const express = require('express')
const router = express.Router()
const eventosController = require('../controllers/eventosController')


router.get('/', eventosController.getEventos)
router.get('/:id', eventosController.getEventoById)
router.post('/', eventosController.postEvento)
router.put('/:id', eventosController.putEvento)

module.exports = router