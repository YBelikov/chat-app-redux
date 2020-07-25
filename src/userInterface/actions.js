import {SEND_MESSAGE} from './actionType';
import {toISOStringLocal} from './service';

export const sendMessage = (text) => ({
    type : SEND_MESSAGE,
    payload: {
        text : text,
        createdAt : toISOStringLocal(new Date()),
        editedAt : ""
    }
});