import { PureComponent } from 'react';
import { Attribute, PBtn } from '../../components';
import styles from './pdp.module.css';
import globalStyle from '../../style/global.module.css';
import HTMLReactParser from 'html-react-parser';

export class Pdp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        };
    }

    // RENDER
    renderThumbnailsImage({ selected, image, onClick }) {
        return (
            <div
                className={`${styles.gallery__thumbnails__image} ${
                    selected
                        ? styles.gallery__thumbnails__image__selected
                        : null
                }`}
                key={image}
                onClick={onClick}
            >
                <img src={image} alt="thumbnail" />
            </div>
        );
    }

    render() {
        const { product } = this.props;
        return (
            <div
                className={`${styles.container} ${globalStyle.adjustWidth_86}`}
            >
                <div className={styles.wrapper}>
                    <div className={styles.gallery}>
                        <div className={styles.gallery__thumbnails}>
                            {product.gallery.map((image, index) => {
                                return this.renderThumbnailsImage({
                                    selected: index === this.state.imageIndex,
                                    image: image,
                                    onClick: () =>
                                        this.setState({ imageIndex: index })
                                });
                            })}
                        </div>
                        <div className={styles.gallery__mainImage}>
                            <img
                                src={product.gallery[this.state.imageIndex]}
                                alt="main"
                            />
                        </div>
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.brand}>{product.brand}</p>
                        <p className={styles.title}>{product.name}</p>
                        <div className={styles.attribute__container}>
                            {product.attributes.map((attribute) => {
                                return (
                                    <Attribute
                                        key={attribute.id}
                                        size="large"
                                        title={attribute.name}
                                        type={attribute.type}
                                        values={attribute.items}
                                        handleAttributeValueChange={
                                            this.props.handleSelectedAttribute
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.price__container}>
                            <p className={styles.priceTitle}>PRICE:</p>
                            <p className={styles.priceValue}>
                                {this.props.price}
                            </p>
                        </div>
                        <div className={styles.btn__container}>
                            <PBtn
                                size="large"
                                text="ADD TO CART"
                                width="100%"
                                disabled={
                                    !product.inStock ||
                                    !this.props.isAllSelected
                                }
                                onClick={() => {
                                    this.props.handleAddToCart();
                                }}
                            />
                        </div>
                        <div className={styles.description}>
                            {HTMLReactParser(product.description)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
