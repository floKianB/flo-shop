import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

import EachCartProduct from '../components/repeatedComponents/EachCartProduct';

function Cart() {
    const {state, dispatch} = useContext(CartContext);
    console.log(state.selectedProducts)
    return (
        <div>
        {   
            state.selectedProducts.length != 0 
                ?
            state.selectedProducts.map(eachProductInCart => <EachCartProduct key={state.selectedProducts.id} productInfo={eachProductInCart} />)
                :
            <h2>Nothing</h2>
        }
        </div>
        
    )
}

export default Cart