import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContextProvider";

import '../../styles/css/cart/EachCartProduct.css';

import trash from '../../images/trash.svg';

function EachCartProduct({productInfo}) {
    const {dispatch} = useContext(CartContext);
    return (
    <>
        <div className="eachProduct">
            <div className="imageOneThird">
                <img src={productInfo.image} alt={productInfo.name} width={250} />
            </div>
            <div className="titleTwoThird">
                <h1>{productInfo.name}</h1>
                <h4>{productInfo.brand}</h4>
                {/* Under the Second third */}
                <div className="actionButtons">
                    <button onClick={()=> dispatch({type: "INCREASE_PRODUCT_QUANTITY", payload: productInfo})}>+</button>
                    <p>{productInfo.quantity}</p>
                    {
                        productInfo.quantity === 1 
                            ?
                        <button onClick={() => dispatch({type: "DELETE_PRODUCT", payload: productInfo})}>
                            <img width="12px" src={trash} alt="remove"/>
                        </button>
                            :
                        <button onClick={() => dispatch({type: "DECREASE_PRODUCT_QUANTITY", payload: productInfo})}>-</button>
                    }
                </div>
            </div>
            {/* Final Price of that product */}
            <div className="priceThirdThird">
                <p>${(Number(productInfo.price)*productInfo.quantity).toFixed(2)}</p>
            </div>

        </div>
        <hr className="devider" width="95%"/>
    </>
        
        
    )
}

export default EachCartProduct;