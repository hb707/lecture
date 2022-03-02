// jwt로 로그인하는 서버 만들어보기

const express = require('express')
const crypto = require('crypto')
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', { express: app })

app.use(express.urlencoded({ extended: true, }))

app.get('/', (req, res) => {
    let login = 0
    if (req.headers.cookie != undefined) {
        let cookies = req.headers.cookie
        let jwt = cookies.split('=')
        const [head, pay, sign] = jwt[1].split('.')
        const decodingPay = JSON.parse(Buffer.from(pay, 'base64').toString()) //decoding하면 string상태임. 이걸 다시 객체로 바꿔줘해서 json.parse()사용
        console.log(`${decodingPay.name}님이 로그인하셨습니다.`) // 페이로드 안의 내용 사용 가능
        const designature = crypto.createHmac('sha256', Buffer.from(salt))
            .update(`${head},${pay}`)
            .digest('hex')
            .replace(/[=]/g)
        if (designature === sign) { login = 1 }
        else { login = 0 }
        res.render('index', { login })
    }
    else {
        res.render('index', { login })
    }
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const { userid, userpw } = req.body
    if (userid == 'admin' && userpw == 'admin') {
        const header0 = {
            "alg": "sha256",
            "typ": "JWT"
        }
        const payload0 = {
            userid: `${userid}`,
            name: '로그인된 사용자'
        }
        const encodingHeader0 = Buffer.from(JSON.stringify(header0)).toString('base64').replace(/[=]/g, '')
        const encodingPayload0 = Buffer.from(JSON.stringify(payload0)).toString('base64').replace(/[=]/g, '')
        const signature0 = crypto.createHmac('sha256', Buffer.from(salt))
            .update(`${encodingHeader},${encodingPayload}`)
            .digest('hex')
            .replace(/[=]/g, '')
        const jwt0 = `${encodingHeader0}.${encodingPayload0}.${signature0}`
        res.setHeader('Set-Cookie', `jwt = ${jwt0}`)
        res.redirect('/')
    }
    else { res.redirect('/') }
})


app.listen(3000, () => {
    console.log("server on")
})