import { Query } from '@tilework/opus';

const currenciesQuery = () => {
    return new Query('currencies', true).addFieldList(['label', 'symbol']);
};

export default currenciesQuery;
