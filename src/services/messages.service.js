import { addMessage, removeMessage } from '../actions/messages.actions';
import { randomChars } from '../utils';

export const addMessageService = (message) => {
    const id = randomChars(14);
    return (dispatch) => {
        dispatch(addMessage({ ...message, id }));
        setTimeout(() => {
            dispatch(removeMessage(id));
        }, 3000);
    };
};
