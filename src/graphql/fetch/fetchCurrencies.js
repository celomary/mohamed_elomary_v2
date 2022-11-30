import client from '../client/setup';
import currenciesQuery from '../queries/currencies.query';

export default async function fetchCurrencies() {
    const { currencies } = await client.post(currenciesQuery());
    return currencies;
}
