import React, { useReducer } from 'react'

// useReducer : 상태를 만들고, 상태를 변경할 수 있는 함수를 제공해줌. (== useState)
const reducer = (state, action) => {
    // 여기에 경우별로 상태를 바꾸는 함수를 다 때려박음.
    console.log('될까?')
    console.log(action.type)
    switch (action.type) {
        case 'changeUserid':
            return {
                ...state,
                user: {
                    ...state.user,
                    userid: 'hb'
                }
            }
        case 'changeUsername':
            return {
                ...state,
                user: {
                    ...state.user,
                    username: '한빈'
                }
            }
        case 'addList':
            return {
                ...state,
                notice: [
                    ...state.notice,
                    {
                        idx: 1,
                        subject: action.payload,
                        content: '내용',
                        date: '2022-04-28'
                    }
                ]
            }
    }
}

const initialState = {
    user: {
        userid: '',
        username: '',
        userlevel: ''
    },
    notice: [
        {
            idx: 0,
            subject: '제목',
            content: '내용',
            date: '2022-04-28'
        }
    ]
}
// 하나의 state에 여러 내용을 때려박아서 사용 => context랑 똑같네? 같이 쓰면 좋겠다

const Reduce = () => {
    const [state, dispatch] = useReducer(reducer, initialState) // 인자 1.함수, 2.기본값
    // useReducer의 목적 : 상태를 바꾸는 코드를 하나에 몰아넣기 위해
    // dispatch 함수 실행 => state를 매개변수로 던져줌

    const handleClick = () => {
        console.log('클릭!')
        dispatch({ type: 'changeUserid' }) // 인자로 넣은 객체가 reducer 함수의 action이 됨
    }

    const handleClick2 = () => {
        console.log('클릭!')
        dispatch({ type: 'changeUsername' }) // 인자로 넣은 객체가 reducer 함수의 action이 됨
    }

    const addList = () => {
        console.log('클릭!')
        dispatch({ type: 'addList', payload: '가변적으로~' }) // 인자로 넣은 객체가 reducer 함수의 action이 됨
    }

    return (
        <>
            <button onClick={handleClick}>id</button>
            <button onClick={handleClick2}>name</button>
            <button onClick={addList}>리스트추가</button>
        </>
    )
}

export default Reduce