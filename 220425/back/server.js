const express = require('express')
const http = require('http')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const server = http.createServer(app)
const { promisePool } = require('./db')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('backserver')
})

app.post('/api/login', async (req, res) => {
    const { userid, userpw } = req.body
    const sql = `SELECT * from user where userid = '${userid}' and userpw = '${userpw}'`
    const [result] = await promisePool.execute(sql)
    res.json(result)
})

server.listen(4000, () => {
    console.log('server on')
})