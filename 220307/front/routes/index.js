const express = require('express')
const router = express.Router()
const boardRouter = require('./board')
const Auth = require('../middlewares/auth')
//const axios = require('axios')


// 접근권한 미들웨어 : 유효한 토큰인지 확인


router.use('/board', Auth, boardRouter)

module.exports = router