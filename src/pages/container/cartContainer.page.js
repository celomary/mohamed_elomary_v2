import { PureComponent } from 'react';
import { Cart } from '../presentational/cart.page';
import { connect } from 'react-redux';
import { calculateCartTotal, formatedPrice } from '../../utils';

export class CCartContainer extends PureComponent {
    get total() {
        return calculateCartTotal(this.props.cart, this.props.currency);
    }

    get tax() {
        return this.total * 0.21;
    }

    get totalWithTax() {
        return this.total + this.tax;
    }

    get quantity() {
        return this.props.cart.reduce((quantity, product) => {
            return quantity + product.quantity;
        }, 0);
    }

    render() {
        const formatedTax = formatedPrice(this.props.currency.symbol, this.tax);
        const formatedTotalWithTax = formatedPrice(
            this.props.currency.symbol,
            this.totalWithTax
        );

        return (
            <Cart
                cart={this.props.cart}
                tax={formatedTax}
                totalWithTax={formatedTotalWithTax}
                quantity={this.quantity}
            />
        );
    }
}

export const CartContainer = connect(
    (state) => ({
        cart: state.cart,
        currency: state.config.currency
    }),
    null
)(CCartContainer);
