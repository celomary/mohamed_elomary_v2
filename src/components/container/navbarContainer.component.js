import { PureComponent } from 'react';
import { Navbar } from '../presentational/navbar.component';
import { OverlayCart } from '..';
import { Modal } from '../../utils';
import { CLOSE, TOGGLE } from '../../utils/status';
import { connect } from 'react-redux';
import { withLocation } from '../../utils';
import { updateCurrencyService } from '../../services/config.service';
class CNavbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false,
            isCurrencyOpen: false
        };
    }

    setStatusCart = (status) => {
        switch (status) {
            case CLOSE:
                this.setState((state) => ({ ...state, isCartOpen: false }));
                break;
            case TOGGLE:
                this.setState((state) => ({
                    ...state,
                    isCartOpen: !state.isCartOpen
                }));
                break;
            default:
                return false;
        }
        return true;
    };

    setStatusCurrency = (status) => {
        switch (status) {
            case CLOSE:
                this.setState((state) => ({ ...state, isCurrencyOpen: false }));
                break;
            case TOGGLE:
                this.setState((state) => ({
                    ...state,
                    isCurrencyOpen: !state.isCurrencyOpen
                }));
                break;
            default:
                return false;
        }
        return true;
    };

    currentCategory = () => {
        const { pathname } = this.props.location;
        const name = pathname.split('/')[2];
        return name;
    };

    render() {
        if (this.state.isCartOpen)
            return (
                <Modal>
                    <Navbar
                        onCartStatusChange={this.setStatusCart}
                        onCurrencyStatusChange={this.setStatusCurrency}
                        currentCurrencyStatus={this.state.isCurrencyOpen}
                        currencies={this.props.currencies}
                        categories={this.props.categories}
                        currentCategory={this.currentCategory()}
                        currentCurrency={this.props.config.currency}
                        onCurrencyChange={this.props.updateCurrency}
                        cart={this.props.cart}
                    />
                    <OverlayCart
                        onCartStatusChange={this.setStatusCart}
                        cart={this.props.cart}
                    />
                </Modal>
            );
        return (
            <Navbar
                onCartStatusChange={this.setStatusCart}
                onCurrencyStatusChange={this.setStatusCurrency}
                currentCurrencyStatus={this.state.isCurrencyOpen}
                currencies={this.props.currencies}
                categories={this.props.categories}
                currentCategory={this.currentCategory()}
                currentCurrency={this.props.config.currency}
                onCurrencyChange={this.props.updateCurrency}
                cart={this.props.cart}
            />
        );
    }
}

export const NavbarContainer = connect(
    (state) => {
        return {
            categories: state.categories,
            currencies: state.currencies,
            cart: state.cart,
            config: state.config
        };
    },
    {
        updateCurrency: updateCurrencyService
    }
)(withLocation(CNavbar));
