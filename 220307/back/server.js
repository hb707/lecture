const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// npm i CORS
// const cors = require('cors')
// app.use(cors())

app.use('/', (req, res, next) => {
    // 여기에서 다른 서버의 요청을 허용할 수 있음
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
    // 쿠키는 허용해주기 위해 별도의 응답헤더 설정이 필요함
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type')
    next()
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.setHeader('Set-cookie', 'name=hanbin; Domain=localhost;')
    res.send('백엔드에서 보냈음')

})

app.listen(4001, () => {
    console.log('server on')
})