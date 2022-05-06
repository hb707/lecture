const initialState = {
    number: 0
}

const UP = 'COUNTER/UP'
const DOWN = 'COUNTER/DOWN'

export const up = () => ({ type: UP })
export const down = () => ({ type: DOWN })

const counter = (state = initialState, action) => {
    switch (action.type) {
        case UP:
            return {
                ...state,
                number: state.number + 1
            }
        case DOWN:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}

export default counter