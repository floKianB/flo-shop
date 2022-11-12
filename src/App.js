import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Home from './pages/Home/Home.js';
import Products from './pages/Products.js';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavigationBar />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="products/" element={<Products/>} />
                  <Route path="product/:id" element={<ProductDetails />} />
                  <Route path="user/" element={<Profile/>} />
                  <Route path="shopping-cart/" element={<Cart/>} />
              </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
