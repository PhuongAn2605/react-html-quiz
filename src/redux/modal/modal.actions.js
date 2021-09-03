import ModalActionTypes from "./modal.types"

export const showModal = () => ({
    type: ModalActionTypes.SHOW_MODAL,
    payload: true
})

export const hideModal = () =>( {
    type: ModalActionTypes.HIDE_MODAL,
    payload: false
})