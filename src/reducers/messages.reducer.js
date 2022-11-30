import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/types';

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload];
        case REMOVE_MESSAGE:
            return state.filter((message) => message.id !== action.payload);
        default:
            return state;
    }
};

export default messagesReducer;
