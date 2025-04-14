import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       {/* ✅ Toast Container yahi likhna hai */}
       <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
  );
};

export default App;
