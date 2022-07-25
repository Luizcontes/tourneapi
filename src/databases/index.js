const mysql = require('mysql2/promise')

const connectMysql = async () => {

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const config = {
        host: "localhost",
        user: "luiz",
        password: "@Rr1234rR@",
        database: "logistics",
    }

    const connection = await mysql.createConnection(config)
    console.log("Conexao realizada com sucesso.")
    global.connection = connection
}

connectMysql()

module.exports = { connectMysql }