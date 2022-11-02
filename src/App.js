import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import ProductDetails from './pages/ProductDetails';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <NavigationBar />
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="products/" element={<Products/>} />
                  <Route path="product/:id" element={<ProductDetails/>} />
              </Routes>
            </BrowserRouter>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
