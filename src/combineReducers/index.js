import { combineReducers } from 'redux';
import categoriesReducer from '../reducers/categories.reducer';
import currenciesReducer from '../reducers/currencies.reducer';
import cartReducer from '../reducers/cart.reducer';
import configReducer from '../reducers/config.reducer';
import messagesReducer from '../reducers/messages.reducer';
const reducers = combineReducers({
    categories: categoriesReducer,
    currencies: currenciesReducer,
    cart: cartReducer,
    config: configReducer,
    messages: messagesReducer
});

export default reducers;
