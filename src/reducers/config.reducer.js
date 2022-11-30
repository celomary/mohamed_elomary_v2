import { UPDATE_CURRENCY } from '../actions/types';

const configReducer = (
    state = {
        currency: {
            symbol: '$',
            label: 'USD'
        }
    },
    action
) => {
    switch (action.type) {
        case UPDATE_CURRENCY:
            return {
                ...state,
                currency: action.payload
            };
        default:
            return state;
    }
};

export default configReducer;
