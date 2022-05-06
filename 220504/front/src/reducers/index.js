import { combineReducers } from 'redux'
import comment from './comment'
import counter from './counter'

const rootReducer = combineReducers({
    comment,
    counter
})

export default rootReducer