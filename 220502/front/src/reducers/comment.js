const initialState = {
    list: [
        {
            userid: 'hbhb',
            content: '댓글입니다',
            date: '2022-05-03'
        }, {
            userid: 'admin',
            content: '댓글입니다22',
            date: '2022-05-03'
        }, {
            userid: 'hanbin',
            content: '댓글입니다33',
            date: '2022-05-03'
        }
    ]
}

const ADD = 'COMMENT/ADD'
const DELETE = 'COMMENT/DELETE'

export const addComment = () => ({ type: ADD })
export const deleteComment = () => ({ type: DELETE })

const comment = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            // payload : 입력한 댓글 객체
            const newList1 = [...state.list].push(action.payload)
            return {
                ...state,
                list: newList1
            }
        case DELETE:
            // payload = idx번호
            const newList2 = [...state.list].splice(action.payload, 1)
            return {
                ...state,
                list: newList2
            }
        default:
            return state
    }
}

export default comment