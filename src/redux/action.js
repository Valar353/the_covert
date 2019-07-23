import {
    ADDSTAFF, API_URL,
    CHANGEMESSAGE, CLEARMESSAGE,
    INIT_STAFF, SENDCOMMENT,
} from "./constant";
import axios from "axios";

export const actionInitStaff = (staffList) => {
    return {
        type: INIT_STAFF,
        staffList
    }
};
export const actionChangeMessage = (message) => {
    return {
        type: CHANGEMESSAGE,
        message
    }
};
export const actionAddStaff = (user) => {
    return {
        type: ADDSTAFF,
        user
    }
};
export const actionSendComment = (id, comment) => {
    return {
        type: SENDCOMMENT,
        id,
        comment
    }
};
export const actionClearMessage = () => {
    return {
        type: CLEARMESSAGE
    }
};

function requestStaffList() {
    return axios({
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: API_URL + '/initStaff.php',
    })

}
export const initStaff = () => {
    return dispatch => {
        return requestStaffList().then(
            res => {
                dispatch(actionInitStaff(res.data))
            }
        );
    };
};
export const SendComment = (id, data) => {
    return dispatch => {
        dispatch(actionSendComment(id, data));
        dispatch(actionClearMessage());
    };
};