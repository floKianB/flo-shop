import React, {  } from 'react';
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import MainStore from './components/MainStore';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <MainStore />
      </ProductContextProvider>
    </div>
  );
}

export default App;
