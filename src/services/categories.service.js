import { setCategories } from '../actions/categories.actions';
import fetchCategories from '../graphql/fetch/fetchCategories';

export const setCategoriesService = () => {
    return async (dispatch) => {
        const categories = await fetchCategories();
        return dispatch(setCategories(categories));
    };
};
