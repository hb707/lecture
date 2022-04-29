export const typeList = {
    GET_COMMENT: 'GET_COMMENT',
    CREATE_COMMENT: 'CREATE_COMMENT',
    UPDATE_COMMENT: 'UPDATE_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT'
}

export const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case typeList.GET_COMMENT:
            return {
                ...state
            }

        case typeList.CREATE_COMMENT:
            return {
                ...state,
                commentItem: [...state.commentItem, payload]
            }

        case typeList.UPDATE_COMMENT:
            const { idx, content } = payload
            const commentItem = [...state.commentItem]
            commentItem[idx].content = content
            return {
                ...state,
                commentItem
            }

        case typeList.DELETE_COMMENT:
            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }
}