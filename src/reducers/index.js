import { combineReducers } from 'redux';
import productsReducer from './products';
import cartsReducer from './carts';

export default combineReducers({
  products: productsReducer,
  carts: cartsReducer
});
