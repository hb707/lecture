// 컴퓨터는 2진수를 사용
// A라는 값은 몇 바이트인가요? 1byte
// 1byte = 8bit = 2니블 = 256
// 아스키코드 HEX (16진수) = 2^4
// 4bit = 1니블 = 2^4 = 16 => 16진수
// 글자 하나는 2니블, 즉 16진수로 두자릿수, 8bit, 1byte의 값을 차지함

const name = 'ingoo'
const buf = Buffer.from(name)
console.log(buf)
// 출력 : <Buffer 68 61 6e 62 69 6e>
// 버퍼 : 하나의 글자를 16진수로 담는 공간? 방식?

// 9번째 줄에서 Buffer.from 사용 가능한 이유? (별도의 npm 설치)
// 노드가 생겨난 이유? => js 언어로 컴퓨터를 조작하고 싶어서! => byte, bit를 컨트롤 할 수 있어야함.
// 브라우저에서 사용하는 js는 buffer가 없음. 버퍼는 컴퓨터를 조작하기 위한 것.

const base64 = Buffer.from(name, 'base64')
console.log(base64)
// 출력 : <Buffer 85 a9 db 8a> 자릿수가 줄어들었다!
console.log(base64.toString('base64')) // 얘는 왜 안되지??
console.log(buf.toString())
// 인코딩 : xx진수로 문자를 변환하는 것
// 디코딩 : 진수로 표현된 값을 원래의 문자로 변환하는 것


// 글자셋의 중요성
// string : utf-8 내에 아스키코드 포함
// 방식이 여러개가 있고 그래서 통신 등을 할 때 이슈가 됨.
// 컴퓨터는 0100101011001101010010 이런식으로만 데이터를 담고있고 이를 해석하는 방식에 따라 다른 문자열을 출력하게됨
// 해석하는 방식 = 위의 utf-8, 아스키코드 이런거..