const express = require('express')
const { StatusCodes } = require('http-status-codes')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const PORT = process.env.PORT || 8081

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Bands Tour API",
            version: "1.0.0",
            description: "Service to track where your favorite groups are going to play",
            contact: {
                name: "Luiz Contes"
            }
        },
        servers: [
            {url: "http://localhost:8081"},
            {url: "https://tourneapi.herokuapp.com"}
        ],
    },
    apis: ["./src/routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Routes

const bandasRoute = require('./routes/bandasRouter')
const locaisRoute = require('./routes/locaisRouter')
const banda_localRoute = require('./routes/banda_localRouter')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/', indexRoute)
app.use('/bandas', bandasRoute)
// app.use('/locais', locaisRoute)
// app.use('/banda_local', banda_localRoute)

app.use((req, res) => res.status(StatusCodes.NOT_FOUND)
    .send('<h1>You\`re fucking bitch!!!</h1>'))

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`))

module.exports = app