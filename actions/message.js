import { SEND_MESSAGE } from '../types/message';

export const setMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SEND_MESSAGE,
            payload: {
               message
            }
        })
    }
}
