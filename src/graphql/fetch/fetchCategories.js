import client from '../client/setup';
import categoriesNameQuery from '../queries/categoriesName.query';
export default async function fetchCategories() {
    const { categories } = await client.post(categoriesNameQuery());
    return categories.map((category) => category.name);
}
