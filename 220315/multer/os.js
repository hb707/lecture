// 내부 라이브러리
// Nodejs로 내 컴퓨터를 조작 - js를 사용하여
// 별도의 설치 필요없음

const os = require('os')

console.log(os.cpus().length)
console.log(os.cpus())
console.log(os.platform())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.freemem())