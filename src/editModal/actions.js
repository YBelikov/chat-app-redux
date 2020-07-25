import {SHOW_EDIT_MODAL} from './actionType';
import {HIDE_EDIT_MODAL} from './actionType';
import {UPDATE_MESSAGE_TEXT} from './actionType';

export const showEditModal = (message) => ({
    type : SHOW_EDIT_MODAL,
    payload : {
        messageData : message
    }
});

export const hideEditModal = () => ({
    type : HIDE_EDIT_MODAL
})

export const updateMessageText = (newMessage) => ({
    type : UPDATE_MESSAGE_TEXT,
    payload : {
        message : newMessage
    }
});