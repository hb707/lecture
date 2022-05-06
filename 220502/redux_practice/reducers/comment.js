const initialState = {
    userid: 'hb',
    value: ''
}

const ADD = 'COMMENT/ADD'
const COMMENT_ADD = payload => ({ type: ADD, payload })

const comment = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD:
            return {
                ...state,
                list: [...state.list, payload]
            }
        default:
            return state
    }
}

module.exports = {
    comment,
    COMMENT_ADD
} 