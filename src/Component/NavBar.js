import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet, Navigate } from 'react-router-dom';

import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
// import ProductThumbnail from './Component/ProductThumbnail';
const NavBar = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description 1' },
        { id: 2, name: 'Product 2', description: 'Description 2' },
        { id: 3, name: 'Product 3', description: 'Description 3' },
        { id: 4, name: 'Product 4', description: 'Description 4' },
      ]);
      const [cartItems, setCartItems] = useState([]);
    
      const addToCart = (productId) => {
        const product = products.find((p) => p.id === productId);
        setCartItems([...cartItems, product]);
      };
    
      const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
      };
    
  return (
    <div className="homepage">
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/checkout">Checkout</Link>
    </nav>

    <Routes>
      <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      {/* Add a catch-all route to handle unknown paths */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </div>
  );
};

export default NavBar;
