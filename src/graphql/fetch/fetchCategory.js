import client from '../client/setup';
import categoryQuery from '../queries/category.query';
import { addFieldsToAttrItems } from '../../utils';

export default async function fetchCategory(name) {
    const { category } = await client.post(categoryQuery(name));

    if (!category) return null;
    const products = category.products.map((product) => {
        const attributes = addFieldsToAttrItems(product.attributes);
        return { ...product, attributes };
    });

    return {
        ...category,
        products
    };
}
