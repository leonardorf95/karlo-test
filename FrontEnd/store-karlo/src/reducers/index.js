import { combineReducers } from 'redux';

import productReducer from './productsReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';

export default combineReducers({
    products: productReducer,
    alert: alertReducer,
    users: userReducer,
    purchase: purchaseReducer
});