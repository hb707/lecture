function* gen() {
    console.log(1)
    yield // 멈춰!
    console.log(2)
    yield
    console.log(3)
}

function* gen2() {
    while (true) {
        yield '무한'
    }
}

function* middle() {
    while (true) {
        const action = yield // next()의 인자값으로 넣은게 yield에 들어감
        if (action.type === 'ingoo') {
            console.log('www')
        }
    }
}


// 제너레이터 함수
// yield 기준 오른쪽값이 next()로 리턴되는 객체의 value에 들어감
// yield를 변수로 선언하면 next()의 인자값으로 value를 넣어줄 수 있음.