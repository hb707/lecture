const express = require('express')
const nunjucks = require('nunjucks')
const user = require('./models/user')
const { createJWT } = require('./utils/jwt')
const auth = require('./middleware/auth')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true
}) // nodemon 사용하기 위해서

app.use(express.urlencoded({ extended: true }))


// 라우터

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const { userid, userpw } = req.body
    const [item] = user.filter(v => v.userid == userid && v.userpw == userpw)
    try {
        // 로그인 실패 처리 (없는 유저)
        if (item === undefined) throw new Error('item undefined')
        else {
            // 로그인 성공처리
            // 1. JWT 토큰을 생성
            //      JWT 토큰을 생성하기 위해서 필요한 값이 무엇일까? : payload에 넣을 값을 먼저 정해야 -> 객체
            //      JWT 토큰 생성 함수를 따로 만듦
            const payload = {
                userid: item.userid,
                username: item.username,
                level: item.level
            }
            const jwt = createJWT(payload)
            // 2. 생성한 토큰을 쿠키로 생성해서 보내주기
            res.setHeader('Set-Cookie', `AccessToken = ${jwt}; HttpOnly; Secure; Path=/;`)
            res.redirect('/')
        }
    }
    catch (err) {
        console.log(e)
        res.status(500).send('실패')
    }
    // res.status(300).send('도착') <- 네트워크 탭에서 상태가 300으로 바뀜
})

app.get('/admin', auth, (req, res) => {
    res.render('admin')
})


app.listen(3000, () => {
    console.log('서버 시작')
})

