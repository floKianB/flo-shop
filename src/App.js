import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [products, setProducts] = useState([]);
  const selectedCollectionOfData = collection(db, "products")
  useEffect(()=>{
    const getProducts = async () => {
      const data = await getDocs(selectedCollectionOfData) 
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getProducts();
    
  }, [])

  useEffect(()=>{
    console.log(products)
  }, [products])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
