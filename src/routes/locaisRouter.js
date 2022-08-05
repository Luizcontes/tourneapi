const express = require('express')
const router = express.Router()
const locaisController = require('../controllers/locaisController')

/* 
 *  Route used to get every request posted to '/locais'
 *  in the app.js and execute a method from locaisService
*/

router.get('/', locaisController.getLocais)
router.get('/:id', locaisController.getLocalById)
router.post('/', locaisController.postLocal)
router.put('/:id', locaisController.putLocal)

module.exports = router