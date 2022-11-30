import { PureComponent } from 'react';
import styles from './navbar.module.css';
import globalStyles from '../../style/global.module.css';
import { Link } from 'react-router-dom';
import { logoIcon, upArrowIcon } from '../../assets';
import { CartIcon } from '../icons/cart.component';
import { CLOSE, TOGGLE } from '../../utils/status';

export class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this.handleCartIconClick = this.handleCartIconClick.bind(this);
        this.handleNavBarContainerClick =
            this.handleNavBarContainerClick.bind(this);
        this.handleCurrencySwitcherClick =
            this.handleCurrencySwitcherClick.bind(this);
    }

    // EVENT HANDLER
    handleCartIconClick(e) {
        e.stopPropagation();
        this.props.onCartStatusChange(TOGGLE);
        this.props.onCurrencyStatusChange(CLOSE);
    }

    handleNavBarContainerClick(e) {
        this.props.onCartStatusChange(CLOSE);
        this.props.onCurrencyStatusChange(CLOSE);
    }

    handleCurrencySwitcherClick(e) {
        e.stopPropagation();
        this.props.onCurrencyStatusChange(TOGGLE);
        this.props.onCartStatusChange(CLOSE);
    }

    // RENDER METHODS
    renderNavbarItem({ name, selected }) {
        return (
            <div
                className={`${styles.navigationItem} ${
                    selected ? styles.navbarItem__selected : null
                }`}
                key={name}
            >
                <li>
                    <Link to={`/category/${name}`}>{name.toUpperCase()}</Link>
                </li>
            </div>
        );
    }

    renderCurrencyDropdown() {
        return (
            <div
                className={styles.currencyDropdown}
                onClick={(e) => e.stopPropagation()}
            >
                {this.props.currencies.map((currency) => {
                    return (
                        <div
                            onClick={() =>
                                this.props.onCurrencyChange(currency)
                            }
                            key={currency.label + currency.symbol}
                            className={`${styles.currencyDropdown__item} ${
                                currency.symbol ===
                                this.props.currentCurrency.symbol
                                    ? styles.currencyDropdown__item__selected
                                    : null
                            }`}
                        >
                            <p>
                                {currency.symbol} {currency.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderCurrencySwitcherIcon({ choosedCurrency }) {
        return (
            <div
                className={`${styles.currencySwitcherIcon} ${
                    this.props.currentCurrencyStatus
                        ? styles.currencySwitcherIcon__selected
                        : null
                }`}
                onClick={this.handleCurrencySwitcherClick}
            >
                <p>{choosedCurrency}</p>
                <img src={upArrowIcon} alt="arrow" />
                {this.props.currentCurrencyStatus &&
                    this.renderCurrencyDropdown()}
            </div>
        );
    }

    renderCartOverlayIcon() {
        return (
            <div
                className={styles.cartOverlayIcon}
                onClick={this.handleCartIconClick}
            >
                <CartIcon color="#000000" />
                {this.props.cart.length > 0 ? (
                    <div className={styles.itemCount}>
                        <p>
                            {this.props.cart > 9
                                ? '9+'
                                : this.props.cart.length}
                        </p>
                    </div>
                ) : null}
            </div>
        );
    }

    render() {
        return (
            <div
                className={styles.navbarContainer}
                onClick={this.handleNavBarContainerClick}
            >
                <div
                    className={`${styles.navbarWrapper} ${globalStyles.adjustWidth_86}`}
                >
                    <nav className={styles.navigationItemsList}>
                        <ul>
                            {this.props.categories.map((category) => {
                                return this.renderNavbarItem({
                                    name: category,
                                    selected:
                                        category === this.props.currentCategory
                                });
                            })}
                        </ul>
                    </nav>
                    <div className={styles.navbarLogo}>
                        <img src={logoIcon} alt="store logo" />
                    </div>
                    <div className={styles.overlays}>
                        {this.renderCurrencySwitcherIcon({
                            choosedCurrency: this.props.currentCurrency.symbol
                        })}
                        {this.renderCartOverlayIcon()}
                    </div>
                </div>
            </div>
        );
    }
}
