// 프론트 서버
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })

// 라우터
// /: 메인페이지
// /user/join : 회원가입
// /user/login : 로그인
// /user/profile : 프로필
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/join', (req, res) => {
    res.render('join')
})

app.get('/user/login', (req, res) => {
    res.render('login')
})

app.get('/user/profile', (req, res) => {
    res.render('profile')
})

app.listen(3001, () => {
    console.log('server on')
})