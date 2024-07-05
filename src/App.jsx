import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
// import 'normalize.css';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <Header />
      <div>
        <h1>Я только начал ;)</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ProductCategory />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
