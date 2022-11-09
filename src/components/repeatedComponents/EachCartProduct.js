import React from 'react';

function EachCartProduct({productInfo}) {
    return (
        <div>
            <h1>{productInfo.name}</h1>
            <h4>{productInfo.brand}</h4>
            <h4>{productInfo.quantity} : {productInfo.price}</h4>
        </div>
    )
}

export default EachCartProduct;