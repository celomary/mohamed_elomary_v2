import { PureComponent } from 'react';
import { Home } from '../presentational/home.page';
import { Loader } from '../../components';
import { withParams, withNavigation } from '../../utils';
import fetchCategory from '../../graphql/fetch/fetchCategory';

export class CHome extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            category: null
        };
    }
    async componentDidMount() {
        const category = await fetchCategory(this.props.params.name);
        if (!category) return this.props.navigate('/404', { replace: true });
        this.setState({ category });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.params.name !== this.props.params.name) {
            this.setState({
                category: null
            });
            const category = await fetchCategory(this.props.params.name);
            if (!category)
                return this.props.navigate('/404', { replace: true });
            this.setState({ category });
        }
    }
    render() {
        if (!this.state.category) {
            return <Loader />;
        }
        return <Home category={this.state.category} />;
    }
}

export const HomeContainer = withNavigation(withParams(CHome));
