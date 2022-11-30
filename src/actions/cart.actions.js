import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_PRODUCT_QUANTITY
} from './types';

export const addToCart = (id, product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            id
        }
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id
        }
    };
};

export const updateProductQuantity = (id, quantity) => {
    return {
        type: UPDATE_PRODUCT_QUANTITY,
        payload: {
            id,
            quantity
        }
    };
};
