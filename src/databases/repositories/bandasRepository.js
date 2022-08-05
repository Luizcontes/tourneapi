const db = require('../appDB')

/* 
 *  This repository is the main connection between the requests
 *  and every query executed in the DataBase
*/

class BandasRepositorio {
    
    async findAll() {
        const connection = await db.connectMysql()
        const query = 'SELECT * FROM bandas'
        const [bandas] = await connection.query(query)

        return bandas
    }
    
    async findById(id) {
        const connection = await db.connectMysql()
        const query = 'SELECT * FROM bandas WHERE id_banda = ?;'
        const [banda] = await connection.query(query, [id])
        
        return banda[0]
    }

    async create({ nome, genero }) {
        const connection = await db.connectMysql()
        const query = 'INSERT INTO bandas (banda, genero) VALUE (?, ?);'
        const [banda] = await connection.query(query, [nome, genero])
        
        return this.findById(banda.insertId)
    }

    async update({ nome, genero }, id) {
        const connection = await db.connectMysql()
        const query = 'UPDATE bandas SET banda = ?, genero = ? WHERE id_banda = ?;'
        await connection.query(query, [nome, genero, id])
        
        return this.findById(id)
    }
}

module.exports = BandasRepositorio