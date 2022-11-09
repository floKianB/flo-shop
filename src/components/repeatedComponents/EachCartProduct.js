import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContextProvider";


import trash from '../../images/trash.svg';

function EachCartProduct({productInfo}) {
    const {dispatch} = useContext(CartContext);
    return (
        <>
            <h1>{productInfo.name}</h1>
            <h4>{productInfo.brand}</h4>
            <div>
                <button onClick={()=> dispatch({type: "INCREASE_PRODUCT_QUANTITY", payload: productInfo})}>+</button>
                <p>{productInfo.quantity}</p>
                {
                    productInfo.quantity == 1 
                        ?
                    <button onClick={() => dispatch({type: "DELETE_PRODUCT", payload: productInfo})}>
                        <img width="12px" src={trash} alt="remove"/>
                    </button>
                        :
                    <button onClick={() => dispatch({type: "DECREASE_PRODUCT_QUANTITY", payload: productInfo})}>-</button>
                }
            </div>
            <h4>Total price : {productInfo.price}</h4>
        </>
    )
}

export default EachCartProduct;