import {ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE} from './actionType';
import {createUUID}from './service';

export const addMessage = (messageData) => ({
    type: ADD_MESSAGE,
    payload: {
        id : createUUID(),
        messageData,
        
    }
});

export const editMessage = (id, messageData) => ({
    type: EDIT_MESSAGE,
    payload : {
        id,
        messageData
    }
});


export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: {
        id
    }
});




