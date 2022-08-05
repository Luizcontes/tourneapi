const express = require('express')
const app = express()
const { StatusCodes } = require('http-status-codes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./openapi.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// Route to manipulate data from a specific band
const bandasRoute = require('./routes/bandasRouter')
app.use('/bandas', bandasRoute)

// Route to manipulate data from a specific place
const locaisRouter = require('./routes/locaisRouter')
app.use('/locais', locaisRouter)

// Route to manipulate data from a specific event
const eventosRouter = require('./routes/eventosRouter')
app.use('/eventos', eventosRouter)

// Not found Server response
app.use((req, res) => res.status(StatusCodes.NOT_FOUND)
.send('<h1>404 Sorry! Page not Found!</h1>'))

// General server error response
app.use((err, req, res, next) => {
    console.log("error")
    res.status(500).send(err.message)
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`))
