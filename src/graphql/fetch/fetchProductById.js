import client from '../client/setup';
import productQueryById from '../queries/products.query';
import { addFieldsToAttrItems } from '../../utils';
export default async function fetchProductById(id) {
    const { product } = await client.post(productQueryById(id));
    if (!product) return null;
    const attributes = addFieldsToAttrItems(product.attributes);
    return { ...product, attributes };
}
