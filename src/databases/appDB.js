const mysql = require('mysql2/promise')
require('dotenv').config()

const connectMysql = async () => {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const config = {
        host: process.env.HOST,
        user: process.env.USERBANDA,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }

    const connection = await mysql.createConnection(config)
    
    console.log("Conexao realizada com sucesso.")
    global.connection = connection
}

connectMysql()

module.exports = { connectMysql }