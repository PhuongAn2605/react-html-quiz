import ModalActionTypes from "./modal.types"

const INITIAL_STATE = {
    showModal: false
}

const modalReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ModalActionTypes.SHOW_MODAL:
        case ModalActionTypes.HIDE_MODAL:
            return {
                // ...state,
                showModal: action.payload
            }
        default:
            return state;

    }
}

export default modalReducer;