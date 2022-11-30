import { SET_CURRENCIES } from '../actions/types';

const currenciesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return action.payload;
        default:
            return state;
    }
};

export default currenciesReducer;
