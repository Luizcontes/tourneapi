const { application, json } = require('express')
const express =  require('express')
const app = express()

const PORT = process.env.PORT || 8081

const indexRoute = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', indexRoute)
app.use((req, res) => res.status(404).send('<h1>You\`re fucking bith!!!</h1>'))

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`))

module.exports = app