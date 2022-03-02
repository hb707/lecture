// Json Web Token
// 왜 필요한가요??
// 서버와 클라이언트 관계를 먼저 잘 알아야함!
// 세션 : 서버 측에서 로그인을 관리함. 100명이 로그인했으면 서버가 100명의 데이터를 가지고 있음.
// 쿠키 : 데이터를 클라이언트가 가지고 있게

// 로스트아크 동접자 100만명
// 한대의 컴퓨터를 100만명이 공격하는 것과 같은 상황
// 그래서 접속하려면 3시간 기다려야
// 기존 서버가 50만명까지 가능해서 2배로 확장한다고 했을 때 (서버의 성능을 높임)
// 유저가 10만명으로 줄어들면? 자원낭비발생
// 이런 상황을 막기 위해
// 한대의 컴퓨터를 사양을 높이는 것 보다
// 가변적으로 컴퓨터 수(서버)를 늘렸다 줄였다 하는 방식으로 유동성 높임

// 그런데 서버를 늘린 경우 로그인의 주체가 서버라
// 1서버에 로그인이 되었더라도 3서버에서는 알지 못하는 문제 발생
// 그래서 로그인 상태를 서버가 아닌 클라이언트에 보관해두자!
// 그런데 쿠키는 사용자가 위조가 가능. 쿠키값을 수정함으로써 다른 아이디를 사용하는 것이 가능하고 서버측에서는 이걸 막을 수 없다.
// 이럴때 필요한 것이 바로 JWT

// JWT
// 1. 사용하고 싶은 정보를 객체에 담는다.
// 2. 해당 객체를 해시화 한다
// 3. 해시를 객체와 쿠키에 담아 각각 서버/클라이언트에 보관
// 4. 서버는 해시값이 유효한지만 검증
// ex) 네이버, 구글 같은 사이트에 한번 로그인 해두면 해시 객체 안에 만료시간을 지정해두고 해시 생성해서 보관
// 패스포트? ... 라이브러리인데 우리는 사용 안할거임
// 패스포트 없이 구현 가능

// jwt.io

// JWT 구조
// header
// body (payload)
// header + body 해서 암호화 (signature)

const crypto = require('crypto')

// header
const header = {
    "alg": "sha256",
    "typ": "JWT"
}

// payload : 실제 내용을 담을 객체
const payload = {
    userid: 'hbhb',
    name: 'hanbin'
}

const encodingHeader0 = JSON.stringify(header) // 객체를 string화 함
//console.log(header, encodingHeader0) // { alg: 'sha256', typ: 'JWT' }(객체) {"alg":"sha256","typ":"JWT"}(string)
const encodingHeader = Buffer.from(JSON.stringify(header)).toString('base64')
//console.log(header, encodingHeader)
const decodingHeader = Buffer.from(encodingHeader, 'base64').toString()
//console.log(decodingHeader) // string(json)
//console.log(JSON.parse(decodingHeader)) //json을 다시 객체로

const encodingPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
//console.log(encodingPayload)

// 여기서 = 표시는 빈 값임. 
const encodingPayload1 = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/[=]/, '')
// = 을 그냥 빈 문자열로 바꾸는 정규식을 뒤에 붙여줌.
// 정규식 이해용으로 일단 여러개 만들어봄
const encodingHeader1 = Buffer.from(JSON.stringify(header)).toString('base64').replace(/[=]/, '') // 하나만 변환됨
const encodingHeader2 = Buffer.from(JSON.stringify(header)).toString('base64').replace(/[=]/g, '') // = 이 여러개일때 전부 변환됨
//console.log(encodingHeader1)
//console.log(encodingHeader2)
//console.log(encodingPayload1)


// 인코딩한 위 헤더와 바디를 해시(시그니쳐)로 만들기
const salt = 'saltysalt'
const signature = crypto.createHmac('sha256', Buffer.from(salt))
    .update(`${encodingHeader2},${encodingPayload1}`)
    .digest('hex')
    .replace(/[=]/g, '')
// 정규식까지 붙여서 빈칸 처리한 값으로 해시 만들고 또 이 해시도 빈칸 처리

console.log("해시값 : ", signature)

// base64로 64비트 사용하는 이유? 16보다 더 압축 가능!

const jwt = `${encodingHeader2}.${encodingPayload1}.${signature}`
//console.log(jwt)
// signature는 검증용도 때문에 필요한 값

// 여기까지 코드는 login session 역할과 같다
// jwt를 cookie로 던지면 됨!!!

// 로그인 여부를 확인하는 미들웨어를 만든 적 있음
// 토큰의 유효여부, 쿠키값이 정확한지 여부 검증해주면 됨
// decoding코드로 확인할 수 있음

const cookie = { token: jwt }
console.log(cookie.token)

// 이제 이 쿠키에 저장된 jwt를 decoding하면 됨
const [head, pay, sign] = cookie.token.split('.')
console.log(head, pay, sign)

const decodingHead = Buffer.from(head, 'base64').toString() // toString()안에 'utf-8', 'euc어쩌고', 'base64', 'base16(?)' 같은거 넣으면 그걸로 변환
console.log(decodingHead)

const designature = crypto.createHmac('sha256', Buffer.from(salt))
    .update(`${head},${pay}`)
    .digest('hex')
    .replace(/[=]/g)

console.log(designature, sign)
console.log(designature === sign)
// console.log(head, decodingPayload)

// 네이버뉴스와 네이버웹툰
// 서로 다른 서버임에도 로그인 유지가 되는 이유?
// 사용자에게 로그인정보가 저장되어있고
// 그걸 디코딩하는 로직이 둘이 똑같아서
// 계속 로그인 유지가 된다!
