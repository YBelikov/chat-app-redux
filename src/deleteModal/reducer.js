import { HIDE_MODAL } from './actionType';
import {SHOW_MODAL} from './actionType';
const initialState = {
    messageId : '',
    isShown : false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOW_MODAL : {
            const {id} = action.payload;
            return {
                ...state,
                messageId : id,
                isShown : true
            };
        }
        case HIDE_MODAL : {
            return {
                ...state,
                messageId : '',
                isShown : false
            };
        }
        default : {
            return state;
        }
    }
}