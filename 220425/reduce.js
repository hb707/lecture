// 입력
const defaultValue = {
    userid: 'hbhb',
    password: '1234'
}

// 출력
// const inputSample = {
//     userid: {
//         value: defaultValue.userid,
//         onChange
//     },
//     password: {
//         value: defaultValue.password,
//         onChange
//     }
// }


// 어떻게 만들까?
const keys = Object.keys(defaultValue) // ['userid', 'password']

const input = {}
for (let i = 0; i < keys.length; i++) {
    input[keys[i]] = {
        value: defaultValue[keys[i]],
        onChange: 'onChange'
    }
}
console.log(input)
console.log({ input })

// reduce사용해서 만드는 방법
// 배열을 객체로 바꾸고 싶을 때 많이 씀
const input2 = keys.reduce((acc, v) => {
    acc[v] = {
        value: defaultValue[v],
        onChange: 'onChange'
    }
    return acc
}, {})

console.log(input2)