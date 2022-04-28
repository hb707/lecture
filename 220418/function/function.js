// 고차함수

// 선언, 호출
const 더하기 = (a, b) => a + b // 선언
const 함수 = (callback, a, b) => callback(a, b) // 선언
//console.log(함수(더하기, 1, 2)) // 첫번째 인자로 함수를 호출하는 것이 아니라 선언만 해줘야함. 콜백 내에서 함수를 호출하기 위해서.

// 고차함수 : 함수 안에 함수를 만들어 사용
const 돌아라 = value => {
    const init = () => {
        console.log(value)
    }

    return init
}

돌아라('hi')
// init함수가 실행되는 것이 아니라 그냥 함수가 되는 것. console.log찍어보면 init함수가 뜸.

setTimeout(돌아라('hi'), 1000);
// setTimeOut의 콜백함수로 돌아라가 실행되어 init함수가 들어가게됨. 그래서 1000ms 후 콜백함수인 init이 실행되어 hi 출력.



// handleSubmit에서 인자를 임의대로 넣고 싶을 때 고차함수 활용
const handleSubmit = (value) = (e) => {
    e.preventDefault()
    console.log(value)
}

function handleSubmit2(value) {
    function init(e) {
        e.preventDefault()
        console.log(value)
    }
    return init
}

// arrow함수와 일반 함수의 차이점.
// arrow함수 : hoisting이 안됨. 호출하는 코드가 항상 선언하는 코드 아랫줄에 있어야함.
// 일반 함수 : hoisting이 됨. 호출을 함수선언 위치와 상관없이 어디에서든 할 수 있음.
// 바인딩....은 또 뭘까? 흑흑..