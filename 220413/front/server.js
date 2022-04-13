// Front Server
const express = require('express')
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const route = require('./routes')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use(route)

app.listen(3000, () => console.log('Front Server Start!'))
