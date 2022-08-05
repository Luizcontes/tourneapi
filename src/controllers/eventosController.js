const { StatusCodes } = require('http-status-codes')
const EventosService = require('../services/eventosService')

/* 
 *  Controller created to execute a CRUD for events
 *  consolidating information about and specific event
 *  alogn the place where it will be held and the band
 *  supposed to play.
*/

exports.getEventos = async (req, res) => {
    const eventos = await new EventosService().getAllEventos()
    res.status(StatusCodes.OK).send(eventos)
}

exports.getEventoById = async (req, res) => {
    const evento = await new EventosService().getEventoById(req.params.id)
    if (!(evento.length === 0)) {
        res.status(StatusCodes.OK).send(...evento)
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Record not found!')
    }
}

exports.postEvento = async (req, res) => {
    const evento = await new EventosService().postEvento(req.body)
    res.status(StatusCodes.OK).send(evento)
}

exports.putEvento = async (req, res) => {
    const evento = await new EventosService().putEvento(req.params.id, req.body)
    if (!(evento.length === 0)) {
        res.status(StatusCodes.OK).send(...evento)
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Record not found!')
    }
}
