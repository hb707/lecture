const initialState = {
    list: []
}

const ADD_REQUEST = 'COMMENT/ADD_REQUEST'
const ADD_SUCCESS = 'COMMENT/ADD_SUCCESS'
const ADD_FAIL = 'COMMENT/ADD_FAIL'
// 이렇게 단계별로 구분해서 action type 설정 => 처리중 로딩화면 대치할 수 있음


const comment = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state
            }

        default:
            return state
    }
}

module.exports = comment