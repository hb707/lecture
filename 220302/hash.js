// 암호화 : 단방향 / 양방향
// 양방향 암호화 : 일정한 규칙에 의해 변환이 되어 규칙을 알면 원래의 값을 알 수 있는 암호방식
// 단방향 암호화 : 암호화 한 뒤에는 원래의 값으로 되돌릴 수 없는 암호 방식 

// 블록체인 쪽 지갑 : hash로 변환. sha256어쩌고 방식?

// 암호화
// crypto 라이브러리 이용해 sha256 암호화
const crypto = require('crypto')
// node.js가 이미 가지고 있는 패키지
// 특정 text를 sha256으로 해쉬값을 만들고 싶다!
const name = 'hanbin'
const sha256 = crypto.createHash('sha256').update(name) // 객체가 출력
const sha256_2 = crypto.createHash('sha256').update(name).digest('base16')
const sha256_3 = crypto.createHash('sha256').update(name).digest('hex') // ==16진수이므로 위와 같은 값이지만 형식만 다름
console.log(sha256)
console.log(sha256_2)
console.log(sha256_3) //  <-- 얘가 지갑주소로 사용하는 해시값과 유사

// 회원가입 시 패스워드를 입력하면 백엔드는 그 패스워드로 해쉬값을 생성한 뒤 그 해쉬값을 DB에 저장
// 해킹시 이걸 모든 경우의 수로 대입해보면서 풀어보면 해쉬값을 풀 수도 있음
// 단순히 해쉬값을 원본값으로 변환하는 것보다 이렇게 대입하는 방식이 더 빠르게 풀 수 있음.


const salt = 'saltysalt' // .env에 넣고 감춰둠. 얘를 덧붙여서 암호화 할때의 내용을 유추할 수 없도록. 결과값이 완전히 달라짐. 이걸 모르면 똑같은 해시값을 만들 수 없음.
const hash = crypto.createHmac('sha256', Buffer.from(salt)).update(name).digest('hex')
console.log(hash)


// 클라이언트 -> 서버 전송시에는 원본 패스워드가 그대로 노출되지 않나요?
// https를 사용하면 이것도 해결됨. 
// 근데 https 도메인을 사야함 ㅎㅎ

// 사용자가 몰렸을 때... 30명만 로그인해도 아마 서버 힘들것.
// 서버컴퓨터 : express를 설치한 컴퓨터 / 서버 : express 파일
// AWS : 24시간 켜져있는 컴퓨터를 빌려주는 서비스 : 클라우드 시스템 활용
// 한 컴퓨터에서 유동적으로 메모리자원을 나눠 여러대의 공간을 만들어 임대해주는 방식
// 아마존이 금액을 책정하는 방식 : 필요한 만큼만 자원을 떼어줄 수 있으므로 사용량으로 금액을 측정함. 유저가 많으면 돈 많이, 적으면 적게

// 분산 어플리케이션이 필요한 이유
// JWT 구현 : 암호화를 알아야해서 기본개념 설명함.