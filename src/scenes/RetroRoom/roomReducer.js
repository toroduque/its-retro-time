const roomReducer = (state, action) => {
    switch(action.type) {
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
                showAddModal: true
            }
            
        case 'HIDE_ADD_MODAL':
            return {
                ...state,
                showAddModal: false
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
        default:
            return state
    }
}

export default roomReducer