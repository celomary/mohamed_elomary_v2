import { PureComponent } from 'react';
import { OverlayCart } from '../presentational/overlayCart.component';
import { connect } from 'react-redux';
import { withNavigation } from '../../utils';
import { formatedPrice, calculateCartTotal } from '../../utils';

class COverlayCart extends PureComponent {
    static tax = 0.21;

    render() {
        const { cart, navigate, currency } = this.props;
        return (
            <OverlayCart
                cart={cart}
                navigate={navigate}
                total={formatedPrice(
                    currency.symbol,
                    calculateCartTotal(cart, currency) * (1 + COverlayCart.tax)
                )}
                onCartStatusChange={this.props.onCartStatusChange}
            />
        );
    }
}

export const OverlayCartContainer = connect(
    (state) => ({
        cart: state.cart,
        currency: state.config.currency
    }),
    null
)(withNavigation(COverlayCart));
