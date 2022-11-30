import { PureComponent } from 'react';
import { HomePage, PdpPage, CartPage, NotFoundPage } from './pages';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { Navbar, Loader, Messages } from './components';
import fetchCategory from './graphql/fetch/fetchCategory';
import { setCategoriesService } from './services/categories.service';
import { setCurrenciesService } from './services/currencies.service';
import { connect } from 'react-redux';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true
        };
    }

    async componentDidMount() {
        this.setState((state) => ({ ...state, loaded: false }));
        await this.props.setCategoriesService();
        await fetchCategory('all');
        await this.props.setCurrenciesService();
        this.setState((state) => ({ ...state, loaded: true }));
    }
    render() {
        if (!this.state.loaded) {
            return <Loader />;
        }
        return (
            <Router>
                <Messages />
                <Navbar />
                <Routes>
                    <Route path="/category/:name" element={<HomePage />} />
                    <Route path="/pdp/:id" element={<PdpPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/"
                        element={<Navigate to={`/category/all`} />}
                    />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        );
    }
}

export default connect(null, {
    setCategoriesService,
    setCurrenciesService
})(App);
