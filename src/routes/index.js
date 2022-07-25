const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')


router.get('/students', studentController.get)

router.get('/123', (req, res) => {
    res.status(200).send("<h1>Chupa cu e foda mesmo hein!!!</h1>")
})

module.exports = router