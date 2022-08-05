const db = require('../appDB')

/* 
 *  This repository is the mais connection between the requests
 *  and every query executed in the DataBase
*/

class LocaisRepository {

    async getLocais() {
        try {
            const connection = await db.connectMysql()
            const query = 'SELECT * FROM locais;'
            const [data] = await connection.query(query)

            return data
        } catch (error) {
            return error
        }
    }

    async getLocalByID(id) {
        try {
            const connection = await db.connectMysql()
            const query = 'SELECT * FROM locais WHERE id_local = ?;'
            const [data] = await connection.query(query, [id])

            return data
        } catch (error) {
            return error
        }
    }

    async postLocal({ nome, morada }) {
        try {
            const connection = await db.connectMysql()
            const query = 'INSERT INTO locais (nome, morada) VALUES (?, ?);'
            const [data] = await connection.query(query, [nome, morada])
            if (data.serverStatus === 2) {
                let record = await this.getLocalByID(data.insertId)
                return record
            }
        } catch (error) {
            return error
        }
    }

    async putLocal(id, { nome, morada }) {
        try {
            const connection = await db.connectMysql()
            const query = 'UPDATE locais SET nome=?, morada=? WHERE id_local=?;'
            const [data] = await connection.query(query, [nome, morada, id])
            if (data.serverStatus === 2) {
                let record = await this.getLocalByID(id)
                return record
            }
        } catch (error) {
            return error
        }
    }
}

module.exports = LocaisRepository