// 백 서버
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const pool = require('./db').pool
const { createToken } = require('./utils/jwt')
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
    const joinFormObj = { ...req.body }
    const conn = await pool.getConnection()
    let insertSql = `INSERT INTO user(userlevel,userid,userpw,name,nickname,birth,gender,phone,mobile) VALUES(?,?,?,?,?,?,?,?,?)`

    const maxAge = 60 * 60 * 1000
    const cookieOption = {
        path: '/',
        httpOnly: true,
        maxAge: maxAge
    }

    // try-catch문 처리를 안해주면 에러가 나면 거기서 멈춤 -> 아래의 코드가 실행이 안됨 -> 응답을 주는 코드 실행 안됨 ->
    try {
        const [result] = await conn.query(insertSql, Object.values(joinFormObj))
        const response = {
            result: {
                row: result.affectedRows,
                id: result.insertId
            },
            errNo: 0
        }
        res.cookie('name', 'hanbin', cookieOption)
        res.json(response)
    }
    catch (e) {
        console.log(e.message) // 중복된 id 전달 시 uplicate entry 'admin' for key 'user.PRIMARY' 뜸
        const response = {
            result: {
                row: 0,
                id: 0
            },
            errNo: 1
        }
        res.json(response)
    }
    // 비동기 처리를 해줌으로써 에러가 뜨더라도 브라우저에 입력한 값들이 사라지지 않고 그대로 유지됨
})


app.post('/api/user/login', async (req, res) => {
    const { userid, userpw } = req.body
    const sql = `SELECT userlevel, userid, name, nickname  FROM user WHERE userid=? and userpw=?`
    const userdata = [userid, userpw]
    try {
        const [result] = await pool.execute(sql, userdata)
        if (result.length <= 0) throw new Error('존재하지 않는 회원')
        const jwt = createToken(result[0])

        const response = {
            result,
            errNo: 0
        }

        const maxAge = 60 * 60 * 1000
        const cookieOption = {
            path: '/',
            httpOnly: true,
            maxAge: maxAge
        }

        res.cookie('token', `${jwt}`, cookieOption)
        res.json(response)
    }
    catch (e) {
        console.log(e.message) // 중복된 id 전달 시 uplicate entry 'admin' for key 'user.PRIMARY' 뜸
        const response = {
            result: [],
            errNo: 1
        }
        res.json(response)
    }
})

// 토큰 인증 담당 라우터
app.post('/api/auth', (req, res) => {
    const { token } = req.body
    // 토큰인증코드 추가
    if (token) {
        res.send('true')
    }
    else {
        res.send('false')
    }
})









app.listen(4001, () => {
    console.log('server on')
})