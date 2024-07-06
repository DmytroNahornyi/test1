// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import productReducer from './redux/reducers/productReducer';

// Редьюсер для корзины
const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Редьюсер для пользователя
const userReducer = (state = { isLoggedIn: false, user: null }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

// Новый редюсер для фильтров
const filterReducer = (state = { category: 'all', searchQuery: '' }, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: action.payload
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  filters: filterReducer, // Добавляем новый редюсер для фильтров
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
