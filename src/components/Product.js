import React from 'react'

function Product({productData}) {
    return (
        <>
            <img src={productData.image} alt={productData.name} width={200} />
            <h3><a href="#">{productData.name}</a></h3>
            <p>Brand: {productData.brand}</p>
            <h4>${productData.price}</h4>
        </>
        
    )
}

export default Product;