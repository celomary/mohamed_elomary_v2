import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_PRODUCT_QUANTITY
} from '../actions/types';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const excludedItem = state.filter(
                (product) => product.id !== action.payload.id
            );
            return [...excludedItem, action.payload.product];
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);
        case UPDATE_PRODUCT_QUANTITY:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + action.payload.quantity
                    };
                }
                return item;
            });
        default:
            return state;
    }
};

export default cartReducer;
