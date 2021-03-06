import { SEND_MESSAGE } from '../types/message';

export const sendMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SEND_MESSAGE,
            payload: {
               message
            }
        })
    }
}
