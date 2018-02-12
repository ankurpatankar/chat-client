import { SET_USER_INFO } from '../types/userInfo';

export const setUserInfo = (userInfo) => {
    return dispatch => {
        dispatch({
            type: SET_USER_INFO,
            payload: {
               userInfo
            }
        })
    }
}
