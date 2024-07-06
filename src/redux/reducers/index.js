import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer'; // Исправлено с './cartReducer'
import productReducer from './productReducer'; // Добавлен импорт productReducer

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  filters: filterReducer,
  products: productReducer, // Добавлен productReducer
});

export default rootReducer;
