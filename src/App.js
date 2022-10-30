import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="product/:id" element={<ProductDetails/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
