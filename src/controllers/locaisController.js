const { StatusCodes } = require('http-status-codes')
const LocaisService = require('../services/locaisService')

/* 
 *  Controller created to execute a CRUD for places
 *  in which events can be held getting requests 
 *  from the routes and executing an action through
 *  the service module
*/

exports.getLocais = async (req, res) => {
    const locais = await new LocaisService().getAll()
    res.status(StatusCodes.OK).send(locais)
}

exports.getLocalById = async (req, res) => {
    const local = await new LocaisService().getById(req.params.id)
    if (!(local.length === 0)) {
        res.status(StatusCodes.OK).send(...local)
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Record not found!')
    }
}

exports.postLocal = async (req, res) => {
    const local = await new LocaisService().postLocal(req.body)
    res.status(StatusCodes.OK).send(local)
}

exports.putLocal = async (req, res) => {
    const local = await new LocaisService().putLocal(req.params.id, req.body)
    if (!(local.length === 0)) {
        res.status(StatusCodes.OK).send(...local)
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Record not found!')
    }
}