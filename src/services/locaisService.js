const LocaisRepository = require('../databases/repositories/locaisRepository')

/* 
 *  This Service is reponsible for executing CRUD using the locals
 *  repository to manipulate data in the locais table in the DB
*/

class LocaisService {
    constructor() {
        this.locaisRepo = new LocaisRepository()
    }

    async getAll() {
        return await this.locaisRepo.getLocais()
    }

    async getById(id) {
        return await this.locaisRepo.getLocalByID(id)
    }

    async postLocal(local) {
        return await this.locaisRepo.postLocal(local)
    }

    async putLocal(id, local) {
        return await this.locaisRepo.putLocal(id, local)
    }
}

module.exports = LocaisService