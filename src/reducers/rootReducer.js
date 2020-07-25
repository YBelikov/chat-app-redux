import chat from '../chat/reducer';
import userInterface from '../userInterface/reducer';
import deleteModal from '../deleteModal/reducer';
import editModal from '../editModal/reducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    chat,
    userInterface,
    deleteModal,
    editModal
});

export default rootReducer;