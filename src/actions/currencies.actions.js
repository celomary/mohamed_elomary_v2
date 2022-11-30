import { SET_CURRENCIES } from './types';

export const setCurrencies = (currencies) => {
    return {
        type: SET_CURRENCIES,
        payload: currencies
    };
};
