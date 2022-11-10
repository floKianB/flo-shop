import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

import EachCartProduct from '../components/repeatedComponents/EachCartProduct';



function Cart() {
    const {state} = useContext(CartContext);
    
    return (
        <>
            <div>
                {   
                    state.selectedProducts.length !== 0 
                        ?
                    state.selectedProducts.map(eachProductInCart => <EachCartProduct key={eachProductInCart.id} productInfo={eachProductInCart} />)
                        :
                    <h2>Nothing</h2>
                }
            </div>
            <h3>${state.totalPrice}</h3>
        </>
        
        
    )
}

export default Cart