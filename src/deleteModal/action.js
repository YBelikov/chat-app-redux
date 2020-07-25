import {SHOW_MODAL} from './actionType';
import {HIDE_MODAL} from './actionType';

export const showDeleteModal = (idToDelete) => ({
        type : SHOW_MODAL,
        payload : {
            id : idToDelete
        }
});

export const hideModal = () => ({
    type : HIDE_MODAL
});