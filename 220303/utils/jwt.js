const crypto = require('crypto')

// encoding 함수
const encoding = (value) => {
    const encoded = Buffer.from(JSON.stringify(value)).toString('base64').replace(/[=]/g, '')

    return encoded
}

// signature 생성 함수
const createSign = (head, pay) => {
    const encodedContent = head + '.' + pay
    const signature = crypto.createHmac('sha256', Buffer.from('salt'))
        .update(encodedContent)
        .digest('hex')
        .replace(/[=]/g, '')

    return signature
}

// JWT 생성 함수
const createJWT = (state) => {
    const header = {
        "alg": "HS256", // sha256 말고 hs256 씀 (왜????)
        "typ": "JWT"
    }
    const payload = { ...state }
    const encodingHeader = encoding(header)
    const encodingPayload = encoding(payload)
    const signature = createSign(encodingHeader, encodingPayload)
    const jwt = `${encodingHeader}.${encodingPayload}.${signature}`
    return jwt
}

module.exports = {
    createSign,
    createJWT
}