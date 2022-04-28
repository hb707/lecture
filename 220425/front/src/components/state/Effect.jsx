import React, { useState, useEffect } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    // class component 생명주기함수
    // 1. componentDidMount
    // 2. componentDidUpdate
    // 3. componentWillUnmount

    // functional component 생명주기관리
    // useEffect 하나로 퉁침!
    // useEffect 내부의 코드가 더러워질 수 있음. 

    // 인자 2개 : 1. 콜백, 2. deps (array)
    // 두번째 인자 (deps) 는 안넣을 때도 있음. 필수X

    useEffect(() => {
        // 여기서 조작할 내용을 넣어줌
        document.title = '리액트공부중 ㅎㅎ'
        return () => {
            // componentWillUnmount 
            // useEffect의 첫번째 인자로 들어가는 콜백함수의 return으로 들어가는 함수는 컴포넌트가 사라질 때만 실행
        }
    }, [count])
    // [] : componentDidMount
    // [count] : count 상태가 update될때마다 실행 => props 혹은 state가 바뀔때마다 실행됨 : componentDidUpdate

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
        </div >
    )
}

export default Effect;