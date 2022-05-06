const initialState = {
    userid: 'hb',
    username: '한빈'
}

const ADD = 'USER/ADD'
const USER_ADD = payload => ({ type: ADD, payload })

const user = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                userid: action.payload
            }
        default:
            return state
    }
}

module.exports = user