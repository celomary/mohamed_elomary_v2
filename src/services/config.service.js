import { updateCurrency } from '../actions/config.actions';

export const updateCurrencyService = (currency) => {
    return (dispatch) => {
        return dispatch(updateCurrency(currency));
    };
};
