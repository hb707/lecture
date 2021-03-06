const initialState = {
    number: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                ...state,
                number: state.number + 1
            }
        case "DOWN":
            return {
                ...state,
                number: state.number - 1
            }

        default:
            return state
    }
}

module.exports = counter