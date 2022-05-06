const { combineReducers } = require('redux')
const comment = require('./comment')
const counter = require('./counter')

const rootReducer = combineReducers({
    comment,
    counter
})

module.exports = rootReducer