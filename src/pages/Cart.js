import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';

import EachCartProduct from '../components/repeatedComponents/EachCartProduct';

import '../styles/css/cart/Cart.css';


function Cart() {
    const {state, dispatch} = useContext(CartContext);
    
    return (
        <>
            <div className="topIntro">
                <div styles={{display: 'flex', justifyContent: 'space-between'}}><p className="accountName">Kian</p><p className="followingTxt">'s Shopping Cart </p></div>
                {
                    state.allProductsQuantity === 0 || state.selectedProducts.length === 0
                        ?
                    <Link to="/products"><p className="linkToProducts">Let's add some products to your cart</p></Link>
                        :
                    <button className="clearCartBtn"onClick={()=>dispatch({type: 'CLEAR'})}>Clear The Cart</button>

                }
            </div>
            <div>
                {   
                    state.selectedProducts.length !== 0 
                        ?
                    state.selectedProducts.map(eachProductInCart => <EachCartProduct key={eachProductInCart.id} productInfo={eachProductInCart} />)
                        :
                    <></>
                }
            </div>
            <div>
                <hr width="95%"/>
                <h3 className="totalPrice">Total Price ({state.allProductsQuantity} items) : ${state.totalPrice}</h3>
            </div>
        </>
        
        
    )
}

export default Cart