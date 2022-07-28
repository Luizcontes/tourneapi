const express = require('express')
const router = express.Router()
const bandasController = require('../controllers/bandasController')


router.get('/', bandasController.getBandas)
router.get('/:id', bandasController.getBandaById)
router.post('/', bandasController.postBanda)
router.put('/:id', bandasController.putBanda)

module.exports = router