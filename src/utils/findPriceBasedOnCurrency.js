export const findProductPrice = (prices, currency) => {
    const price = prices.find(
        (price) => price.currency.label === currency.label
    );
    return price.amount;
};
