import { combineReducers } from 'redux';
import productsReducer from './products';
import cartsReducer from './carts';
import categoryReducer from './categories';

export default combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  categories: categoryReducer
});
