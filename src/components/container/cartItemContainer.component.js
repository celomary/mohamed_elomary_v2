import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    updateProductQuantityService,
    removeFromCartService
} from '../../services/cart.service';
import { addMessageService } from '../../services/messages.service';
import { findProductPrice, formatedPrice } from '../../utils';

import { CartItem } from '../presentational/cartItem.component';

class CCartItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: this.props.product.gallery.length > 1 ? 0 : -1
        };
    }

    incrementQuantity() {
        this.props.updateProductQuantity(this.props.product.id, 1);
    }

    decrementQuantity() {
        const { product } = this.props;
        if (product.quantity === 1) {
            this.props.addMessage({
                type: 'info',
                title: 'Removed',
                text: `"${product.name}" removed from cart!`
            });
            return this.props.removeFromCart(product.id);
        }
        this.props.updateProductQuantity(product.id, -1);
    }

    incrementImageIndex() {
        const {
            product: { gallery }
        } = this.props;
        this.setState({
            imageIndex: (this.state.imageIndex + 1) % gallery.length
        });
    }

    decrementImageIndex() {
        const {
            product: { gallery }
        } = this.props;
        this.setState({
            imageIndex:
                this.state.imageIndex - 1 >= 0
                    ? this.state.imageIndex - 1
                    : gallery.length - 1
        });
    }

    render() {
        const { product, currency } = this.props;
        return (
            <CartItem
                product={product}
                type={this.props.type}
                onIncrement={this.incrementQuantity.bind(this)}
                onDecrement={this.decrementQuantity.bind(this)}
                onLeftArrowClick={this.decrementImageIndex.bind(this)}
                onRightArrowClick={this.incrementImageIndex.bind(this)}
                imageIndex={this.state.imageIndex}
                price={formatedPrice(
                    currency.symbol,
                    findProductPrice(product.prices, currency)
                )}
            />
        );
    }
}

export const CartItemContainer = connect(
    (state) => ({
        currency: state.config.currency
    }),
    {
        updateProductQuantity: updateProductQuantityService,
        removeFromCart: removeFromCartService,
        addMessage: addMessageService
    }
)(CCartItem);
