const reviewBoardReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SELECTED_COLUMN':
            return {
                ...state,
                selectedColumn: action.payload
            }
        
        case 'RESET_INDEX': 
            return {
                ...state,
                index: 0
            }

        case 'INCREMENT_INDEX': 
            return {
                ...state,
                index: state.index + 1
            }

        case 'DECREMENT_INDEX': 
            return {
                ...state,
                index: state.index - 1
            }
    
        default:
            break;
    }
}

export default reviewBoardReducer