const { default: axios } = require("axios")
const { createStore, compose, applyMiddleware } = require("redux")
// redux의 미들웨어 관련 메소드 : compose, applyMiddleware
// 미들웨어 = dispatch 날렸을 때 reducer가 실행되기 전 단계에서 실행되는 함수! => thunk, saga
// 유명한게 thunk인데 얘는 10줄짜리 코드임. 짧아서 기능은 단순하지만 많이 사용됨. 간단하고 설정이 쉽고 사용하기도 나쁘지않지만 이슈발생확률도 올라감
// saga는 좀 더 복잡함. 설정이나 사용이 조금 귀찮지만 코드 내에서 이슈 발생 확률이 낮음.
const rootReducer = require("./reducers")


// thunk 라이브러리 직접구현
// 3단 고차함수ㅋㅋㅋㅋㅋㅋㅋ
const thunk = ({ getState, dispatch }) => (next) => (action) => {
    // store에서 getState로 상태정보와 dispatch 정보를 가져올 수 있음. 요즘에는 인자로 store 대신 구조분해할당해서 {getState, dispatch} 를 넣음
    // next는 express의 미들웨어에서 사용했던 next와 같은 느낌. 

    console.log(action)
    return next(action)
}

// const enhancer = compose(applyMiddleware(thunk1))
// const store = createStore(rootReducer, enhancer)
// dispatch를 날리면 enhancer로 넣은 미들웨어 실행 후 리듀스 실행



// 기존에는 action으로 type, payload 담긴 객체를 던졌다면 
// 지금은 action으로 함수를 던지는 방식
// 미들웨어에서는 action이 함수일때와 객체일때를 구분해서
// 객체일때는 next로 리듀서 실행, 함수일때는 해당 함수 처리대로 함수내부에서 디스패치를 날림

const thunk1 = ({ getState, dispatch }) => (next) => (action) => {
    if (typeof action === 'function') {
        console.log('함수를 action으로 받음')
        // next 처리 하지 않고(리듀서 넘어가지 않고) 여기서 dispatch날림. 여기서는 action을 함수가 아닌 객체를 담아서
        action('asdf') // bb가 action으로 넘어감
        action(dispatch)
    } else {
        return next(action)
    }
}

const thunk2 = ({ getState, dispatch }) => (next) => (action) => (
    typeof action === 'function'
        ? action(dispatch)
        : next(action)
)

const enhancer = compose(applyMiddleware(thunk1))
// 미들웨어 여러개 넣을 때
const middlewares = [thunk1, thunk2]
const enhancer2 = compose(applyMiddleware(...middlewares)) // 배열에 여러개의 미들웨어를 담은 뒤 스프레드 연산자로 삽입
const store = createStore(rootReducer, enhancer)
const enhancer3 = process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

const aa = () => {
    const bb = (i) => {
        console.log(i)
    }
    return bb
}
store.dispatch(aa()) // bb가 담김

const aaa = () => {
    const bbb = (dispatch) => {
        dispatch({})
    }
    return bbb
}

const aaaa = () => async dispatch => {
    dispatch({})
}
// 컴포넌트가 아닌 다른 파일에서도 dispatch를 사용하기 위해서 thunk를 사용하는 것!

const loginAPI = () => async dispatch => {
    // try
    // const result = await axios.post()
    // login success
    // dipatch({type: 로그인성공})
    // catch
    // error
    // dispatch({type: 로그인실패})

    try {
        const result = await axios.get(url, {
            withCredentials: true
        })
        dispatch({ type: 'LOGIN_SUCCESS', payload: true })
    } catch (e) {
        dispatch({ type: 'LOGIN_FAIL', payload: false })
    }
}




