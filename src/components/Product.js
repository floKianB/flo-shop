import React from 'react'
import { Link } from 'react-router-dom';

function Product({productData}) {
    return (
        <>
            <img src={productData.image} alt={productData.name} width={200} />
            <h3><Link to={`/product/${productData.id}`}>{productData.name}</Link></h3>
            <p>Brand: {productData.brand}</p>
            <h4>${productData.price}</h4>
        </>
        
    )
}

export default Product;