// 정규식!

const source = 'hnbn707@gmail.com'
const re = /^[\w]+@[\w]+\.[\w]{2,4}$/g
console.log(re.test(source))


const source2 = '010-8251-0552'
const re2 = /^[\d]{3}-[\d]{4}-[\d]{4}$/g
console.log(re2.test(source2))