import { PureComponent } from 'react';
import { CartItem, PBtn } from '../';
import { CLOSE } from '../../utils/status';
import { empty } from '../../assets';

import styles from './overlayCart.module.css';
export class OverlayCart extends PureComponent {
    constructor(props) {
        super(props);
        this.handleContainerClick = this.handleContainerClick.bind(this);
        this.handleOutlineBtnClick = this.handleOutlineBtnClick.bind(this);
    }
    // EVENT HANDLERS

    handleContainerClick = () => {
        this.props.onCartStatusChange(CLOSE);
    };

    handleOutlineBtnClick = () => {
        this.props.onCartStatusChange(CLOSE);
        this.props.navigate('/cart');
    };

    // RENDER METHODS
    renderTotal() {
        return (
            <div className={styles.total__container}>
                <p className={styles.total__text}>Total</p>
                <p className={styles.total__price}>{this.props.total}</p>
            </div>
        );
    }

    renderEmptyCart() {
        return (
            <div className={styles.emptyCart__container}>
                <img src={empty} alt="empty cart" />
            </div>
        );
    }
    renderOutlineBtn() {
        return (
            <button
                className={styles.outlineBtn}
                onClick={this.handleOutlineBtnClick}
            >
                View Bag
            </button>
        );
    }

    renderBtns() {
        return (
            <div className={styles.btns__container}>
                {this.renderOutlineBtn()}
                <PBtn
                    text="Checkout"
                    size="small"
                    width="140px"
                    disabled={true}
                />
            </div>
        );
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        window.scroll(0, 0);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <div
                className={styles.OverlayCart__container}
                onClick={this.handleContainerClick}
            >
                <div className={styles.OverlayCart__wrapper}>
                    <div
                        className={styles.OverlayCart__content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.OverlayCart__header}>
                            <p>
                                <span>My Bag</span>,{' '}
                                {this.props.cart.length > 0
                                    ? this.props.cart.length + ' items'
                                    : 'is empty!'}
                            </p>
                        </div>
                        <div className={styles.OverlayCart__body}>
                            {this.props.cart.length === 0
                                ? this.renderEmptyCart()
                                : this.props.cart.map((product) => {
                                      return (
                                          <CartItem
                                              key={product.id}
                                              product={product}
                                              type="overlay"
                                          />
                                      );
                                  })}
                        </div>
                        <div>
                            {this.renderTotal()}
                            {this.renderBtns()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
