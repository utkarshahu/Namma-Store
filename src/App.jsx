import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext.jsx';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
