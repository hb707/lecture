import React, { useState } from 'react'

const State = () => {
    // 여기에만 hooks 코드 사용 가능 (return 전!)
    // 기존 class 문법에서는 extends Component로 state의 세팅을 가져와서 클래스 내에서 state를 만들어 바로 쓸 수 있었음. 
    // 이걸 대체해주는게 useState

    // const state = useState(0) // 인자로 초기값
    // const count = state[0] // return [초기값, 함수] // 배열을 리턴함. 0번인덱스에는 초기값, 1번인덱스에서는 state를 변경할 수 있는 함수
    // const setCount = state[1]

    // 기존에는 state 객체에 여러 값들을 다 때려박아서 꺼내 썼다면
    // useState에서는 변수를 하나하나 따로 설정해야함

    // 아래 두 코드는 동일!
    // class
    // const state1 = {
    //     value: '',
    //     list: [
    //         { userid: 'hbhb', content: '내용' }
    //     ]
    // }
    // function
    const [value, setValue] = useState(true)
    // const [list, setList] = useState([{ userid: 'hbhb', content: '내용' }])
    const [count, setCount] = useState(0)

    const handleClick = e => {
        setValue(!value)
    }

    const countClick = () => {
        setCount(count + 1)
        // setState 함수의 내부에 콜백함수를 넣을 수도 있음
        setCount((prev) => { return prev + 1 })
        setCount(p => p + 1)
    }
    return (
        <div>
            <span onClick={handleClick}>{value ? 'ingoo' : 'hanbin'}</span>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={countClick}>Click me</button>
            </div>
        </div>
    )
}

export default State