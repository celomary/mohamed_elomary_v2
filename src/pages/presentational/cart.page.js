import { PureComponent } from 'react';
import styles from './cart.module.css';
import globalStyles from '../../style/global.module.css';
import { CartItem, PBtn } from '../../components';
import { empty } from '../../assets';
export class Cart extends PureComponent {
    renderFooterRow({ title, value, isTotal }) {
        return (
            <div className={styles.footerRow}>
                <p
                    className={`${styles.footerRowTitle} ${
                        isTotal ? styles.totalTitle : null
                    }`}
                >
                    {title}:
                </p>
                <p className={styles.footerRowValue}>{value}</p>
            </div>
        );
    }
    renderItemWithSeperator(item) {
        return (
            <div key={item.id}>
                <div className={styles.seperator}></div>
                <div className={styles.cartItemContainer}>
                    <CartItem type="cart" product={item} />
                </div>
            </div>
        );
    }

    renderEmptyCart() {
        return (
            <div className={styles.emptyCart__container}>
                <p>EMPTY CART</p>
                <img src={empty} alt="empty cart" />
            </div>
        );
    }
    render() {
        return (
            <div
                className={`${styles.container} ${globalStyles.adjustWidth_86}`}
            >
                <h1 className={styles.title}>CART</h1>
                <div className={styles.cartItemsContainer}>
                    {this.props.cart.length === 0
                        ? this.renderEmptyCart()
                        : this.props.cart.map((item) => {
                              return this.renderItemWithSeperator(item);
                          })}
                </div>
                <div className={styles.footer}>
                    <div className={styles.seperator}></div>
                    <div className={styles.footerContainer}>
                        {this.renderFooterRow({
                            title: 'Tax 21%',
                            value: this.props.tax
                        })}
                        {this.renderFooterRow({
                            title: 'Quantity',
                            value: this.props.quantity
                        })}
                        {this.renderFooterRow({
                            title: 'Total',
                            value: this.props.totalWithTax,
                            isTotal: true
                        })}
                    </div>
                    <div className={styles.btnContainer}>
                        <PBtn
                            text="ORDER"
                            size="large"
                            width="100%"
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
