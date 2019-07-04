const roomReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ROOM_ID': 
            return {
                ...state,
                id: action.payload
            }
        
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        case 'SET_USERS': 
            return {
                ...state,
                users: action.payload
            }
        
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload
            }
        
        case 'SELECT_MESSAGE': 
            return {
                ...state,
                selectedMessage: action.payload
            }

        case 'SHOW_ADD_MODAL':
            return {
                ...state,
                showAddModal: true,
                selectedColumn: action.payload
            }
            
        case 'HIDE_ADD_MODAL':
            return {
                ...state,
                showAddModal: false,
                selectedColumn: null
            }

        case 'SHOW_EDIT_MODAL':
            return {
                ...state,
                showEditModal: true
            }

        case 'HIDE_EDIT_MODAL':
            return {
                ...state,
                showEditModal: false
            }
        
        case 'SHOW_REVIEW_BOARD':
            return {
                ...state,
                isShowingReviewBoard: true
            }
        
        case 'HIDE_REVIEW_BOARD':
            return {
                ...state,
                isShowingReviewBoard: false
            }

        default:
            return state
    }
}

export default roomReducer