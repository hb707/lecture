// 백 서버
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const pool = require('./db').pool
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: true
})) // ()안에 옵션값으로 http://localhost:3001만 허용하도록 처리해주면 됨
// cors 사용하면 Allow-Origin 에 뒤가 *로 처리돼서 모든 사람 다 허용
// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
// res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
// res.setHeader('Access-Control-Allow-Credentials', 'true')
// res.setHeader('Access-Control-Allow-Headers', 'Content-type')

// 라우터 
app.post('/', (req, res) => {
    console.log(req.body)
    res.setHeader('Set-cookie', 'name=hanbin; path=/; Domain=localhost;')
    res.send('백엔드에서 보냈음')

})

app.post('/api/user/join', async (req, res) => {
    console.log(req.body)
    const joinFormObj = { ...req.body }
    console.log(Object.values(joinFormObj))
    const conn = await pool.getConnection()
    let insertSql = `INSERT INTO user(userlevel,userid,userpw,name,nickname,birth,gender,phone,mobile) VALUES(?,?,?,?,?,?,?,?,?)`
    const [result] = await conn.query(insertSql, Object.values(joinFormObj))

    const response = {
        result: {
            row: result.affectedRows,
            id: result.insertId
        },
        errNo: 0
    }

    const maxAge = 60 * 60 * 1000
    const cookieOption = {
        path: '/',
        httpOnly: true,
        maxAge: maxAge
    }
    res.cookie('name', 'hanbin', cookieOption)
    res.json(response)

    // 현재까지 구현한거 : 회원가입 폼 작성 후 ajax로 백서버 통신 - user db에 추가, 쿠키 생성해서 브라우저로 던지기, 메인으로 리디렉션
    // 과제!
    // 1. 회원가입 시 에러 안나게
    // 1-1. 아이디 중복체크
    // 1-2. javascript form 체크
    // 1-3. 에러가 나더라도 서버 꺼지지 않게
    // 2. try-catch 문 쓰기
})

app.listen(4001, () => {
    console.log('server on')
})