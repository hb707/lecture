const { createSign } = require('../utils/jwt')


const auth = (req, res, next) => {
    // 토큰만 뽑아오기
    const cookies = req.headers.cookie
    const [[, token]] = cookies.split(';') // 쿠키가 여러개인 경우
        .map(v => v.trim().split('='))
        .filter(v => {
            return v[0] == "AccessToken"
        })

    try {
        // 토큰의 유효성 확인 : 가져온 토큰의 header, payload로 new signature 생성 후 토큰의 signature와 동일한지 확인
        const [head, pay, sign] = token.split('.')
        const verifySign = createSign(head, pay)
        if (verifySign !== sign) { throw new Error('Token error') } // 유효하지 않은 토큰 에러처리

        // payload를 디코딩하여 내용을 확인하고 내보내기
        const payJson = Buffer.from(pay, 'base64').toString('utf-8') //Json형태의 string
        req.user = { ...JSON.parse(payJson) }
        console.log(req.user)

        if (req.user.level !== 1) {
            console.log('관리자 레벨이 아닙니다.')
            throw new Error('Admin level error')
        }

        next()
    }
    catch (e) { res.send('토큰이 조작되거나 권한이 없는 사용자 입니다') }
}

module.exports = auth