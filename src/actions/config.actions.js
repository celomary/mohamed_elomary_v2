import { UPDATE_CURRENCY } from './types';

export const updateCurrency = (currency) => {
    return {
        type: UPDATE_CURRENCY,
        payload: currency
    };
};
