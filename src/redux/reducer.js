import {initialState} from './Store';
import {
    ADDSTAFF,
    CHANGEMESSAGE, CLEARMESSAGE,
    INIT_STAFF, SENDCOMMENT,
} from "./constant";

export default function staffReducer(state = initialState, action) {

    switch (action.type) {
        case INIT_STAFF:
            return {...state, staff: [...action.staffList]};
        case CHANGEMESSAGE:
            return {...state, myMessage: action.message};
        case ADDSTAFF:
            return {...state, staff:[...state.staff, action.user]};
        case CLEARMESSAGE:
            return {...state, myMessage: {theme: '', message: '', phone: ''}};
        case SENDCOMMENT:
            let comment;
            let newUser;
            let userList = [];
            for(let key in state.staff){
                let user = state.staff[key];

                if(key === action.id){
                    let actCom = action.comment;
                    let message = `{"author":"${actCom.theme}", "message":"${actCom.message}"}`;
                    if(user.comments === ''){
                        comment ='['+message+']';
                        newUser = {...user, comments: comment}
                    }else{
                        comment = user.comments.slice(0,-1)+','+message+']';
                        newUser = {...user, comments: comment}
                    }
                    userList.push(newUser);
                }else{
                    userList.push(user);
                }
            }
            return {...state, staff:[
                    ...userList
                ]};
        default:
            return state;
    }
}



