const express = require('express')
const router = express.Router()
const bandasController = require('../controllers/bandasController')

/* 
 *  Route used to get every request posted to '/bandas'
 *  in the app.js and execute a method from bandasService
 *  It retrieves information about the bandas
*/

router.get('/', bandasController.getBandas)
router.get('/:id', bandasController.getBandaById)
router.post('/', bandasController.postBanda)
router.put('/:id', bandasController.putBanda)

module.exports = router