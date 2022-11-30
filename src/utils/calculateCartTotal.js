import { findProductPrice } from '.';
export const calculateCartTotal = (cart, currency) => {
    return cart.reduce((total, product) => {
        return (
            total +
            findProductPrice(product.prices, currency) * product.quantity
        );
    }, 0);
};
