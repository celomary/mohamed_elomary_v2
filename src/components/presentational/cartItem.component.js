import { PureComponent } from 'react';
import styles from './cartItem.module.css';
import { PlusIcon } from '../icons/plusIcon.component';
import { MinusIcon } from '../icons/minusIcon.component';
import { leftArrowIcon, rightArrowIcon } from '../../assets';
import { Attribute } from '../';

const OVERLAY = 'overlay';
export class CartItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { hover: 'none', counter: 1 };
        const type = this.props.type === OVERLAY ? 'overlayCart' : 'cart';
        this.style = inlineStyles[type];
    }

    // IMAGE

    renderImageBtn({ icon, onClick }) {
        return (
            <button className={styles.imageBtn} onClick={onClick}>
                <img src={icon} alt="swiper btn" />
            </button>
        );
    }

    renderImageBtns() {
        return (
            this.props.type !== OVERLAY &&
            this.props.imageIndex !== -1 && (
                <div className={styles.containerImageBtns}>
                    {this.renderImageBtn({
                        icon: leftArrowIcon,
                        onClick: () => this.props.onLeftArrowClick()
                    })}
                    {this.renderImageBtn({
                        icon: rightArrowIcon,
                        onClick: () => this.props.onRightArrowClick()
                    })}
                </div>
            )
        );
    }
    renderContainerImages() {
        const index = this.props.imageIndex > -1 ? this.props.imageIndex : 0;
        return (
            <div style={this.style.image} className={styles.containerImage}>
                <img src={this.props.product.gallery[index]} alt="product" />
                {this.renderImageBtns()}
            </div>
        );
    }

    // COUNTER
    renderCounterBtn({ Icon, onClick, type }) {
        const { iconSize, btnSize } = this.style;
        return (
            <button
                className={styles.CounterBtn}
                style={{
                    width: btnSize,
                    height: btnSize,
                    backgroundColor:
                        this.state.hover === type ? '#000000' : '#ffffff'
                }}
                onMouseEnter={() => this.setState({ hover: type })}
                onMouseLeave={() => this.setState({ hover: 'none' })}
                onClick={onClick}
            >
                <Icon
                    color={this.state.hover === type ? '#ffffff' : '#000000'}
                    width={iconSize}
                    height={iconSize}
                />
            </button>
        );
    }

    renderCounter() {
        return (
            <div className={styles.counter}>
                {this.renderCounterBtn({
                    Icon: PlusIcon,
                    type: 'increment',
                    onClick: () => {
                        this.props.onIncrement();
                    }
                })}
                <div
                    className={styles.counterValue}
                    style={this.style.counterValue}
                >
                    {this.props.product.quantity}
                </div>
                {this.renderCounterBtn({
                    Icon: MinusIcon,
                    onClick: () => {
                        this.props.onDecrement();
                    },
                    type: 'decrement'
                })}
            </div>
        );
    }
    // MAIN
    render() {
        const { product } = this.props;
        return (
            <div className={styles.CartItem__container}>
                <div className={styles.details}>
                    {this.props.type !== OVERLAY && (
                        <p className={styles.brand}>{product.brand}</p>
                    )}
                    <p className={styles.title} style={this.style.title}>
                        {product.name}
                    </p>
                    <p className={styles.price} style={this.style.price}>
                        {this.props.price}
                    </p>
                    <div
                        className={styles.attributes}
                        style={this.style.attributesContainer}
                    >
                        {product.attributes.map((attribute, index) => {
                            return (
                                <Attribute
                                    key={attribute.id}
                                    size={
                                        this.props.type === OVERLAY
                                            ? 'small'
                                            : 'large'
                                    }
                                    type={attribute.type}
                                    title={attribute.name}
                                    values={attribute.items}
                                />
                            );
                        })}
                    </div>
                </div>
                <div
                    className={styles.wrapper}
                    style={{
                        gap: this.style.gap
                    }}
                >
                    {this.renderCounter()}
                    {this.renderContainerImages()}
                </div>
            </div>
        );
    }
}

const inlineStyles = {
    overlayCart: {
        title: {
            fontSize: '16px',
            fontWeight: '300'
        },
        price: {
            fontSize: '16px',
            fontWeight: '500',
            marginTop: '6px'
        },
        image: {
            width: '121px',
            height: '190px'
        },
        iconSize: 12,
        btnSize: '25px',
        counterValue: {
            fontSize: '16px'
        },
        attributesContainer: {
            marginTop: '8px',
            gap: '8px'
        },
        gap: '8px'
    },
    cart: {
        title: {
            fontSize: '30px',
            fontWeight: '400'
        },
        price: {
            fontSize: '24px',
            fontWeight: '700',
            marginTop: '20px'
        },
        image: {
            width: '200px',
            height: '288px'
        },
        iconSize: 18,
        btnSize: '45px',
        counterValue: {
            fontSize: '24px'
        },
        attributesContainer: {
            marginTop: '20px',
            gap: '16px'
        },
        gap: '24px'
    }
};
