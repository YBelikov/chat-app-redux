import { HIDE_EDIT_MODAL, SHOW_EDIT_MODAL, UPDATE_MESSAGE_TEXT } from "./actionType";


const initialState = {
    message : '',
    isShown : false
} 


export default function (state = initialState, action) {
    switch(action.type){
        case HIDE_EDIT_MODAL : {
            return {
                ...state,
                message : '',
                isShown : false
            }
        }
        case SHOW_EDIT_MODAL : {
            const {messageData} = action.payload;
            return {
                ...state,
                message : messageData, 
                isShown : true
            } 
        }
        case UPDATE_MESSAGE_TEXT : {
            const {message} = action.payload;
            return {
                ...state,
                message    
            }
        }
        default : {
            return state;
        }
    }
}