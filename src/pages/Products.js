import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider';
import EachProduct from '../components/repeatedComponents/EachProduct';

import "../styles/css/Product/products.css";

function Products() {
    const products = useContext(ProductContext)
    console.log(products)
    return (
        <div className="productsContainer">
        {
            products.map((product, index) => <EachProduct key={product.id} id={index} productData={product}/>)
        }
        </div>

    )
}

export default Products;