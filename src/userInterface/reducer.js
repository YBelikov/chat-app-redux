import {SEND_MESSAGE} from './actionType';


const initialState = {   
        "userId": "970aace6-ce74-11ea-87d0-0242ac130003 ",
        "avatar": "https://www.aceshowbiz.com/images/photo/tom_pelphrey.jpg",
        "user": "Yura"
}    


export default function (state = initialState, action) {
    switch(action.type) {
        case SEND_MESSAGE : {
            const {text, createdAt, editedAt} = action.payload;
            return {
                ...state,
                text, 
                createdAt,
                editedAt
            }
        }
        default : {
            return state;
        }
    }
    
}
