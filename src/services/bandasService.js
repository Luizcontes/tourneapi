const BandasRepositorio = require('../databases/repositories/bandasRepositorio')

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