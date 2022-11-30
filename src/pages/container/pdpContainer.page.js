import { PureComponent } from 'react';
import { Pdp } from '../presentational/pdp.page';
import fetchProductById from '../../graphql/fetch/fetchProductById';
import { Loader } from '../../components';
import { withParams, findProductPrice, withNavigation } from '../../utils';
import { addToCartService } from '../../services/cart.service';
import { addMessageService } from '../../services/messages.service';
import { connect } from 'react-redux';
class CPdp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
        this.alreadyInCart = false;
    }

    checkAllAttributesSelected = () => {
        const { product } = this.state;
        const selectedAttributes = product.attributes.filter((attribute) =>
            attribute.items.some((item) => {
                return item.selected;
            })
        );
        return selectedAttributes.length === product.attributes.length;
    };

    updateSelectedAttributes = (attribute, value) => {
        const attributes = this.state.product.attributes.map((attr) => {
            if (attr.name === attribute) {
                return {
                    ...attr,
                    items: attr.items.map((item) => {
                        return { ...item, selected: item.value === value };
                    })
                };
            }
            return attr;
        });
        this.setState({ product: { ...this.state.product, attributes } });
    };

    getProductFromCart() {
        const { cart } = this.props;
        const { id } = this.props.params;
        const product = cart.find((product) => product.id === id) || null;
        if (product) this.alreadyInCart = true;
        return product;
    }

    async getProductFromApi() {
        const { id } = this.props.params;
        const product = await fetchProductById(id);
        return product;
    }

    async componentDidMount() {
        const product =
            this.getProductFromCart() || (await this.getProductFromApi());
        if (!product) return this.props.navigate('/404', { replace: true });
        this.setState({ product });
    }

    handleMessage() {
        this.props.addMessage({
            type: 'success',
            text: this.alreadyInCart ? 'Item Updated!' : 'Item added to Cart!',
            title: this.alreadyInCart ? 'Updated' : 'Added'
        });
    }

    handleAddToCart() {
        const product = { quantity: 1, ...this.state.product };
        this.props.addToCart(product.id, product);
        this.handleMessage();
        this.alreadyInCart = true;
    }

    render() {
        const { product } = this.state;
        const { currency } = this.props;
        if (!product) {
            return <Loader />;
        }
        return (
            <Pdp
                price={
                    currency.symbol + findProductPrice(product.prices, currency)
                }
                product={product}
                handleSelectedAttribute={
                    product.inStock ? this.updateSelectedAttributes : null
                }
                isAllSelected={this.checkAllAttributesSelected()}
                handleAddToCart={this.handleAddToCart.bind(this)}
            />
        );
    }
}

export const PdpContainer = connect(
    (state) => ({
        currency: state.config.currency,
        cart: state.cart
    }),
    {
        addToCart: addToCartService,
        addMessage: addMessageService
    }
)(withNavigation(withParams(CPdp)));
