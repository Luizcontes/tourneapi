const db = require('../appDB')

/* 
 *  This repository is the main connection between the requests
 *  and every query executed in the DataBase
*/

class EventoRepository {

    async getAll() {
        try {
            const connection = await db.connectMysql()
            const query = 'SELECT * FROM eventslist'
            const [eventos] = await connection.query(query)

            return eventos
        } catch (error) {
            return error
        }
    }

    async getById(id) {
        try {
            const connection = await db.connectMysql()
            const query = 'SELECT * FROM eventslist WHERE id_evento  = ?'
            const [evento] = await connection.query(query, [id])

            return evento
        } catch (error) {
            return error
        }
    }

    async postEvento({ id_banda, id_local, nome, data }) {
        try {
            const connection = await db.connectMysql()
            const query = 'INSERT INTO eventos (id_banda, id_local, nome, data) ' +
                'VALUES (?, ?, ?, ?);'
            const [evento] = await connection.query(
                query, [id_banda, id_local, nome, data])
            if (evento.serverStatus === 2) {
                let record = await this.getById(evento.insertId)
                return record
            }
        } catch (error) {
            return error
        }
    }

    async putEvento(id, { nome, data, id_banda, id_local }) {
        try {
            const connection = await db.connectMysql()
            const query = 'UPDATE eventos SET nome=?, ' +
                'data=?, id_banda=?, id_local=? WHERE id_evento=?;'
            const [evento] = await connection.query(
                query, [nome, data, id_banda, id_local, id])
            if (evento.serverStatus === 2) {
                let record = await this.getById(id)
                return record
            }

        } catch (error) {
            return error
        }
    }

}

module.exports = EventoRepository