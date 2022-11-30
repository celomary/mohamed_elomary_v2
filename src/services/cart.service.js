import {
    addToCart,
    removeFromCart,
    updateProductQuantity
} from '../actions/cart.actions';

export const addToCartService = (id, product) => {
    return (dispatch) => {
        dispatch(addToCart(id, product));
    };
};

export const removeFromCartService = (id) => {
    return (dispatch) => {
        dispatch(removeFromCart(id));
    };
};

export const updateProductQuantityService = (id, quantity) => {
    return (dispatch) => {
        dispatch(updateProductQuantity(id, quantity));
    };
};
