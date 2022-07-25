const db = require('../index')

class StudentRepository {

    async findAll() {
        const connection = await db.connectMysql()
        const query = 'SELECT * FROM clientes'
        const students = await connection.query(query)

        return students[0]
    }
}

module.exports = StudentRepository