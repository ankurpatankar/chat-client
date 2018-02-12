import {
    SET_NAME,
    SET_USERNAME,
    SET_USER_INFO,
} from '../types/userInfo';

const initState = {
    userInfo: {
        userName: '',
        name: '',
    },
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_NAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    name: action.payload.name,
                }
            }
        case SET_USERNAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userName: action.payload.userName
                }
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload.userInfo
            }
        default:
            return state;
    }
}
