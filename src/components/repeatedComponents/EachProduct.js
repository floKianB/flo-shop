import React from 'react';
import { Link } from 'react-router-dom';

import "../../styles/css/Product/eachProduct.css";

function EachProduct({productData}) {    
    return (
        <div className="eachProductCard">
            {/* Header */}
            <span className="header">
                <h3 className="productTitle"><Link to={`/product/${productData.id}`}>{productData.name}</Link></h3>
                <h4 className="productBrand">{productData.brand}</h4>
            </span>
            {/* Image */}
            <span className="imageContainer">
                <img className="productImage" src={productData.image} alt={productData.name} width={200} />
            </span>
            {/* Price and Add to Cart */}
            <span className="priceSection">
                <div>
                    <button className="addToCart">Add to Cart</button>
                </div>
                <h3 className="product">${productData.price}</h3>
            </span>
        </div>
        
    )
}

export default EachProduct;