import Store, { initState } from './store/Context'
import { useReducer, useMemo } from 'react'
import { typeList, reducer } from './store/reducer'
import CommentLayout from './CommentLayout'



// 상태와 dispatch 값을 전역상태로 제공 : reducer 필요

const Comment = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const defaultValue = useMemo(() => ({
        state,
        dispatch
    }), [state])
    return (
        <Store.Provider value={defaultValue}>
            <CommentLayout />
        </Store.Provider>
    )
}

export default Comment;