import { setCurrencies } from '../actions/currencies.actions';
import fetchCurrencies from '../graphql/fetch/fetchCurrencies';

export const setCurrenciesService = () => {
    return async (dispatch) => {
        const currencies = await fetchCurrencies();
        return dispatch(setCurrencies(currencies));
    };
};
