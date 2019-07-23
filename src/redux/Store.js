import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import staffReducer from "./reducer";

const initialState = {
    myMessage: {
        theme: '',
        message:'',
        phone:''
    }
    }
;
let store = createStore(staffReducer, applyMiddleware(thunk));
export {store, initialState};