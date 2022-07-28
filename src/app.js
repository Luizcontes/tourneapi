const express = require('express')
const app = express()
const { StatusCodes } = require('http-status-codes')

// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerOptions = require('../swaggerConfig')
// const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./openapi.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

const bandasRoute = require('./routes/bandasRouter')
app.use('/bandas', bandasRoute)

app.use((req, res) => res.status(StatusCodes.NOT_FOUND)
.send('<h1>404 Sorry! Page not Found!</h1>'))

const PORT = process.env.PORT || 8081
app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`))
