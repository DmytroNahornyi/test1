// src/store.js
import { createStore, combineReducers } from 'redux';

// Пример редьюсера для корзины
const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    // Добавьте здесь обработку действий для корзины
    default:
      return state;
  }
};

// Пример редьюсера для пользователя
const userReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    // Добавьте здесь обработку действий для пользователя
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
