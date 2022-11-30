import { Query } from '@tilework/opus';

const categoriesNameQuery = () => {
    return new Query('categories', true).addField('name');
};

export default categoriesNameQuery;
