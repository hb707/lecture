/* 리덕스
npm init -y
npm i redux

리덕스의 사용 목적 => 상태관리!
react도 상태관리 해주는데 왜 굳이 리덕스를 쓸까?
- 체계가 있음. 쉽게 바꿀 수 없음
*/
const redux = require('redux')
console.log(redux)
// 객체를 반환. 메소드 몇개가 들어있음. 기존에 썼던 createStore + 앞으로 쓸 applyMiddleware, combineReducers

const { createStore } = redux
// createStore는 useReducer와 유사 => 상태를 만들어줌!
// useContext와는 다르다. store라는 이름때문에 헷갈리지 말자.

const initialState = {
    name: 'react!',
    coffee: 0
}

// state 객체의 내용이 매우 길어지므로 따로 변수로 빼서 작성한 뒤 reducer 함수를 선언할 때 state 인자로 넣어줌.
const reducer = (state = initialState, action) => {
    // 리듀서 : 객체를 리턴해주는 함수
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: 'hanbin!'
        }
    }
    else if (action.type === 'ADD_COFFEE') {
        return {
            ...state,
            coffee: state.coffee + 1
        }
    }
    else {
        return state
    }
}
const store = createStore(reducer) // 이 단계에서 초기값을 할당받게됨 ( 위 코드에서 else 부분의 리턴값 )
console.log(store.getState())
// store도 객체. dispatch, subscribe, getState 메소드를 가지고 있음
// 기존에 useReducer 훅 사용 방법 : const [state, dispatch] = useReducer(reducer, initalState)
// store도 마찬가지로 dispatch와 state를 가지고 있고 비슷하게 사용하면 됨.
store.dispatch({ type: 'CHANGE_NAME' })
console.log(store.getState())

// dispatch : store의 첫번째 인자값 reducer를 호출하는 애
// reducer = 상태를 바꿔주는 함수! : dispatch를 써서 상태를 바꿔주는 함수를 호출한다

store.dispatch({ type: 'ADD_COFFEE' })
console.log(store.getState())

// store.subscribe : dispatch가 실행될 때마다 인자로 받은 콜백함수가 실행되는 함수 
// 콜백함수를 인자로 받음
const log = () => {
    console.log('hello world')
}

store.subscribe(log)

store.dispatch({ type: 'ADD_COFFEE' })
console.log(store.getState())

// dispatch -> reducer 실행. 리턴완료 (상태가 업데이트 됨) -> subscribe의 인자인 콜백함수가 실행




// 전역상태로 관리할 정보
// 회원정보(꼭!), 게시판 정보 (유저가 좋아요 누른거 등등), 카테고리 정보 (어디로 이동하든 다 볼 수 있어야하기때문에)
// userid 바꾸는거 
// comment 내용추가
// category




const user = (state, action) => {
    return {
        userid: 'web7722',
        username: 'ingoo'
    }
}

const rootReducer = redux.combineReducers({
    user,
    comment,
    category
})

// reducers라는 디렉토리에 user.js, comment.js, category.js 파일을 따로 만들고 얘를 root에서 불러와서 combineReducers로 합쳐줌
// user.js에서는 user객체의 초기값과 reducer함수만 넣어서 필요한 것만 보면서 작업할 수 있게끔!
// const initialState, const userReducer = (state = initialState, action) => {}
// initialState는 default에서 처리