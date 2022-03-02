const crypto = require('crypto')

const header = {
    "alg": "sha256",
    "typ": "JWT"
}

// payload : 실제 내용을 담을 객체
const payload = {
    userid: 'hbhb',
    name: 'hanbin'
}

const encodingHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace(/[=]/g, '')
const encodingPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/[=]/g, '')

const salt = 'saltysalt'

const signature1 = crypto.createHmac('sha256', Buffer.from(salt))
    .update(`${encodingHeader},${encodingPayload}`)
    .digest('hex')
    .replace(/[=]/g, '')

console.log("1번 : ", signature1)


const signature2 = crypto.createHmac('sha256', Buffer.from('justsalt'))
    .update(`${encodingHeader},${encodingPayload}`)
    .digest('hex')
    .replace(/[=]/g, '')

console.log("2번 : ", signature2)

const jwt1 = `${encodingHeader}.${encodingPayload}.${signature1}`
const jwt2 = `${encodingHeader}.${encodingPayload}.${signature2}`
console.log(jwt1)
console.log(jwt2)