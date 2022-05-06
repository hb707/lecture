const initialState = {
    list: []
}

const comment = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state
            }

        default:
            return state
    }
}

export default comment