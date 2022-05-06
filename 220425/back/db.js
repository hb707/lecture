const mysql = require('mysql2')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'hanbin'
const password = process.env.DB_PASSWORD || 'hanbin00'
const database = process.env.DB_DATABASE || 'toy'

const config = { host, user, password, database }
const pool = mysql.createPool(config)
const promisePool = pool.promise()

module.exports = {
    promisePool
}