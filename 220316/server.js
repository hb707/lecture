const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/kakao/login', (req, res) => {
    const host = 'https://kauth.kakao.com'
    const client_id = process.env.REST_API_KEY

    const redirectURI = host + `/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
    res.redirect
})

app.post('/', (req, res) => {
    const { userid, userpw } = req.body
    console.log(userid, userpw)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('server start')
})