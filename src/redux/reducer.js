const initialState = {
    scrollY: 0,
    scrollX: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateY":
            return {
                ...state,
                scrollY: action.payload
            }
        case "updateX":
            return {
                ...state,
                scrollX: action.payload
            }
        default:
            return state;
    }  
}

export default reducer;