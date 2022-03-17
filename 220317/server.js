const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const router = require('./routes')
const webSocket = require('./socket')

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

webSocket(app.listen(3001, () => {
    console.log('server on')
}))