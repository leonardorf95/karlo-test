import { combineReducers } from 'redux';

import productReducer from './productsReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import purchaseReducer from './purchaseReducer';
import authReducer from './authReducer';

export default combineReducers({
    products: productReducer,
    alert: alertReducer,
    users: userReducer,
    purchase: purchaseReducer,
    auth: authReducer
});