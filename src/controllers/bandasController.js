const BandasService = require('../services/bandasService')
const { StatusCodes } = require("http-status-codes")

/* 
 *  Controller created to execute a CRUD for bands
 *  records getting requests from the routes
 *  and executing an action through the service module
*/

exports.getBandas = async (req, res, next) => {
    const bandas = await new BandasService().getBandas()
    res.status(StatusCodes.OK).send(bandas)
}

exports.getBandaById = async (req, res, next) => {
    try {
        const banda = await new BandasService().getBandaById(req.params.id)
        if(banda === undefined)
            throw new Error('Record not found')
        res.status(StatusCodes.OK).send(banda)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: error.message })
    }
}

exports.postBanda = async (req, res, next) => {
    try {
        const banda = await new BandasService().postBanda(req.body)
        res.status(StatusCodes.CREATED).send(banda)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: error.message })
    }
}

exports.putBanda = async (req, res, next) => {
    try {
        const banda = await new BandasService()
        .putBanda(req.body, parseInt(req.params.id))
        if(banda === undefined)
            throw new Error('Record not found')
        res.status(StatusCodes.OK).send(banda)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: error.message })
    }
}

