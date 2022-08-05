const EventoRepository = require('../databases/repositories/eventosRepository')

/* 
 *  This Service is reponsible for executing CRUD using the events
 *  repository to manipulate data in the locais table in the DB
*/

class EventoService {
    constructor() {
        this.eventoRepo = new EventoRepository()
    }

    async getAllEventos() {
        return await this.eventoRepo.getAll()
    }

    async getEventoById(id) {
        return await this.eventoRepo.getById(id)
    }

    async postEvento(evento) {
        return await this.eventoRepo.postEvento(evento)
    }

    async putEvento(id, evento) {
        return await this.eventoRepo.putEvento(id, evento)
    }
}

module.exports = EventoService