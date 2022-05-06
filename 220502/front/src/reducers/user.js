const initialState = {
    isLogin: false,
    userid: '',
    nickname: ''
}

const CHANGE_LOGIN_STATE = 'USER/CHANGE_LOGIN'
const CHANGE_NICKNAME = 'USER/CHANGE_NICKNAME'

export const login = () => ({ type: CHANGE_LOGIN_STATE })
export const nickname = () => ({ type: CHANGE_NICKNAME })

const user = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case CHANGE_NICKNAME:
            return {
                ...state,
                nickname: action.payload
            }
        default:
            return state
    }
}

export default user