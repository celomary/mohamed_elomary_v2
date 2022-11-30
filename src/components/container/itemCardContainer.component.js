import { PureComponent } from 'react';
import { ItemCard } from '../presentational/itemCard.component';
import { withNavigation, findProductPrice } from '../../utils';
import { connect } from 'react-redux';
import { addToCartService } from '../../services/cart.service';
import { addMessageService } from '../../services/messages.service';
class CItemCard extends PureComponent {
    getCurrentPrice() {
        const {
            item: { prices },
            currency
        } = this.props;
        return currency.symbol + findProductPrice(prices, currency).toFixed(2);
    }

    preSelectAttributes(product) {
        return {
            quantity: 1,
            ...product,
            attributes: product.attributes.map((attribute) => {
                return {
                    ...attribute,
                    items: attribute.items.map((item, index) => {
                        if (index === 0) {
                            return { ...item, selected: true };
                        }
                        return { ...item, selected: false };
                    })
                };
            })
        };
    }

    addToCartHandler = () => {
        const { item } = this.props;
        const found = this.props.cart.find((product) => product.id === item.id);
        if (!found) {
            this.props.addToCart(item.id, this.preSelectAttributes(item));
            this.props.addMessage({
                type: 'success',
                text: `"${item.name}" added to cart`,
                title: 'Added!'
            });
        } else {
            this.props.addMessage({
                type: 'info',
                text: `"${item.name}" already in cart`,
                title: 'Already added'
            });
        }
    };

    render() {
        const { item, navigate } = this.props;
        return (
            <ItemCard
                id={item.id}
                img={item.gallery[0]}
                name={item.name}
                price={this.getCurrentPrice()}
                outOfStock={!item.inStock}
                addToCart={this.addToCartHandler.bind(this)}
                navigate={navigate}
            />
        );
    }
}

export const ItemCardContainer = connect(
    (state) => ({
        currency: state.config.currency,
        cart: state.cart
    }),
    {
        addToCart: addToCartService,
        addMessage: addMessageService
    }
)(withNavigation(CItemCard));
