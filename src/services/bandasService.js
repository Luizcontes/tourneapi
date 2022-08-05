const BandasRepositorio = require('../databases/repositories/bandasRepository')

/* 
 *  This Service is reponsible for executing CRUD using the bands
 *  repository to manipulate data about the band`s table in the DB
*/


class BandasService {
    
    constructor() {
        this.bandasRepo = new BandasRepositorio()
    }

    async getBandas() {
        return this.bandasRepo.findAll()
    }

    async getBandaById(id) {
        return this.bandasRepo.findById(id)
    }

    async postBanda(data) {
        return this.bandasRepo.create(data)
    }

    async putBanda(data, id) {
        return this.bandasRepo.update(data, id)
    }
}

module.exports = BandasService