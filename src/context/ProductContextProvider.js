import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export const ProductContext = createContext()

function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const selectedCollectionOfData = collection(db, "products")
    useEffect(()=>{
        const getProducts = async () => {
            const data = await getDocs(selectedCollectionOfData) 
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getProducts();
    }, [])


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider