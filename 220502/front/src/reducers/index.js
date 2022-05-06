// const initialState = {
//     number: 0
// }
// const UP = 'COUNTER/UP'
// const DOWN = 'COUNTER/DOWN'

// export const up = () => ({ type: UP })
// export const down = () => ({ type: DOWN })

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UP:
//             return {
//                 ...state,
//                 number: state.number + 1
//             }
//         case DOWN:
//             return {
//                 ...state,
//                 number: state.number - 1
//             }
//         default:
//             return state
//     }
// }

import { combineReducers } from 'redux'
import user from './user'
import comment from './comment'
import counter from './counter'

const rootReducer = combineReducers({
    user,
    comment,
    counter
})

export default rootReducer