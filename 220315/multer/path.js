const path = require('path')

console.log(__dirname)

let dir1 = path.join(__dirname, '/new.js') // 절대경로 무시
let dir2 = path.resolve(__dirname, '/new.js') // 절대경로 존중
console.log(dir1, dir2)
// 경로, 파일명에서 대소문자 구분 중요함! 잘해주기

// 4가지 케이스를 알아보자
// server.js 에서 js라는 텍스트만 얻고 싶다

let str = 'server.js'
console.log(str.split('.')[1]) // js
console.log(path.extname('server.js')) // .js
console.log(path.dirname('/Users/hanbin/blockchain5/220315/multer/server.js')) // /Users/hanbin/blockchain5/220315/multer
console.log(path.basename('/Users/hanbin/blockchain5/220315/multer/server.js')) // server.js
console.log(path.basename('/Users/hanbin/blockchain5/220315/multer/server.js', '.js')) // server : 2번째 인자를 뺀 값