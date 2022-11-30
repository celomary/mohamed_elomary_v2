import { PureComponent } from 'react';
import styles from './itemCard.module.css';
import { CartIcon } from '../icons/cart.component';
export class ItemCard extends PureComponent {
    constructor(props) {
        super(props);
        this.handleAddToCartBtn = this.handleAddToCartBtn.bind(this);
        this.handleCardItemClick = this.handleCardItemClick.bind(this);
    }

    // HANDLERS
    handleAddToCartBtn(event) {
        event.stopPropagation();
        this.props.addToCart();
    }

    handleCardItemClick = () => {
        this.props.navigate(`/pdp/${this.props.id}`);
    };

    // RENDER
    renderCartItemButton() {
        return (
            <button
                className={styles.cartItemBtn}
                onClick={this.handleAddToCartBtn}
            >
                <CartIcon color="#ffffff" />
            </button>
        );
    }

    renderItemInfo({ className, text }) {
        return (
            <p
                className={`${className} ${
                    this.props.outOfStock ? styles.outOfStockText : null
                }`}
            >
                {text}
            </p>
        );
    }

    renderOutOfStockOverlay() {
        return (
            <div className={styles.overlayImage}>
                <p className={styles.outOfStockText}>OUT OF STOCK</p>
            </div>
        );
    }

    render() {
        return (
            <div
                className={styles.itemCard__container}
                onClick={this.handleCardItemClick}
            >
                <div className={styles.itemCardImage__container}>
                    <img src={this.props.img} alt="item card" />
                    {!this.props.outOfStock && this.renderCartItemButton()}
                    {this.props.outOfStock && this.renderOutOfStockOverlay()}
                </div>
                <div className={styles.itemCardInfo__container}>
                    {this.renderItemInfo({
                        className: styles.itemCardName,
                        text: this.props.name
                    })}
                    {this.renderItemInfo({
                        className: styles.itemCardPrice,
                        text: this.props.price
                    })}
                </div>
            </div>
        );
    }
}
