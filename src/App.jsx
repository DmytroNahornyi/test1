import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import 'normalize.css';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Изменено здесь
import rootReducer from './redux/reducers';

// Создаем Redux store с поддержкой Redux DevTools и thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Компонент для защищенных маршрутов
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  console.log('App component rendered');
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header />
            <main style={{ minHeight: 'calc(100vh - 100px)', padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/category/:categoryId"
                  element={<ProductCategory />}
                />
                <Route
                  path="/product/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <UserProfile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}


export default App;
