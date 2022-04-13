// Back Server
const express = require('express')
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const http = require('http')
const cors = require('cors')
// const socketIo = require('socket.io')
// const passport = require('passport')
const route = require('./routes')
// const socket = require('./socket.js')
const app = express()

// socket통신 설정 // 🔥
/*
const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})
socket(io)
*/

// express 기본 설정
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})) // 🔥
// app.use(passport.initialize()) // 🔥

app.use(route)

app.listen(4000, () => console.log('Back Server Start!'))
