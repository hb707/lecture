const { createStore, compose, applyMiddleware } = require('redux')
const rootReducer = require('./reducers')
const reduxSaga = require('redux-saga') // obj, import시에는 자동으로 export default로 설정한 sagaMiddlewareFactory 메소드가 변수에 담김.
const sagaMiddleware = reduxSaga.default() // require로 가져왔으니까 처리해줌.
const { takeEvery, takeLatest, call, put } = require('redux-saga/effects') // 사용하는 메소드 : call fork put take takeEvery takeLatest takeLeading ... 만 비구조할당문으로 가져와서 씀. 근데 쓸때마다 yield를 붙여줘야함
const { default: axios } = require('axios')
// effect가 많아서 좀 더 체계적으로 미들웨어 관리가 가능함.
// saga에서는 yield를 메소드 앞에 붙여주는 거만 유의하면..

function loginAPI(id, pw) {
    return axios.post('http://localhost:4000/login')
}

function* change(action) {
    //dispatch의 인자인 action객체를 change함수의 인자로 넘겨줌
    const { payload: { id, pw } } = action
    console.log(id, pw)
    try {
        // 여기서 axios : 비동기통신 할 때 call Effect 사용
        const result = yield call(loginAPI, id, pw) // loginAPI의 인자로 넣어주는 애들을 순서에 맞춰서 call의 인자로 추가해주면 알아서 loginAPI 함수 실행
        // yield가 await을 대체해주기때문에 async,await 문법을 사용하지 않아도 됨.
        // api 호출 성공시 처리 : dispatch 해줌. 그런데 이 영역에서는 store에 접근을 할 수 없어서 dispatch 사용불가능 (파일을 분리할거니까)
        // 그래서 dispatch 대신 사용하는게 리덕스사가 이펙트 중 하나인 put임
        yield put({ type: '성공' })
    } catch (e) {
        // api 호출 실패시 처리
        yield put({ type: '실패' })
    }
}

function* rootSaga() {
    // redux-saga/effects 의 메소드를 실행할 때마다 yield를 붙여줘야함
    // 1. action상태확인
    // takeEvery : 액션값이 같으면 특정함수를 호출. 인자1 : type내용, 인자2 : 호출할 함수명(단, *함수여야함)
    yield takeEvery('ingoo', change) // thunk에서 action으로 함수를 넣어줬던걸 saga에서는 이런식으로 표현함
    // yield takeLatest('ingoo', change)
    // 버튼을 사용자가 두번 눌렀을 때 두번을 모두 처리해주고싶으면 takeEvery, 가장 마지막 요청만 처리해주고싶으면 takeLatest
}

const middlewares = [sagaMiddleware]
const enhancer = process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTool(applyMiddleware(...middlewares))

const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)

store.dispatch({ type: 'ingoo' }) // dispatch 날림 => rootSaga 함수가 미들웨어로 실행