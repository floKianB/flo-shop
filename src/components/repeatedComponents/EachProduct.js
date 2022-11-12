import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
// image Links
import trash from '../../images/trash.svg'
// styles
import "../../styles/css/Product/eachProduct.css";

const isInCart = (state, id) => !!state.selectedProducts.find(product => product.id === id)


function EachProduct({productData, id}) { 
    const {state, dispatch} = useContext(CartContext);
    const selectedItem = state.selectedProducts.find(selectedProduct => selectedProduct.id === productData.id);
    return (
        <div className="eachProductCard">
            <Link to={`/product/${Number(id)}`}>
                {/* Header */}
                <span className="header">
                    <h3 className="productTitle">{productData.name}</h3>
                    <h4 className="productBrand">{productData.brand}</h4>
                </span>
                {/* Image */}
                <span className="imageContainer">
                    <img className="productImage" src={productData.image} alt={productData.name}/>
                </span>
            </Link>
            {/* Price and Add to Cart */}
            <span className="priceSection">
                <div className="buttonContainer">
                    {
                        isInCart(state, productData.id) ?
                            selectedItem.quantity !== 1 ? 
                            <> 
                                <button className="functionalButtons" onClick={() => dispatch({type: "DECREASE_PRODUCT_QUANTITY", payload: productData})}>-</button>
                                <h3>{selectedItem.quantity}</h3>
                                <button className="functionalButtons" onClick={() => {
                                    dispatch({type: "INCREASE_PRODUCT_QUANTITY", payload: productData})
                                    }
                                } >+</button>
                            </>
                            :
                            <> 
                                <button className="functionalButtons" onClick={() => dispatch({type: "DELETE_PRODUCT", payload: productData})}>
                                    <img width="12px" src={trash} alt="remove"/>
                                </button>
                                <h3>{selectedItem.quantity}</h3>
                                <button className="functionalButtons" onClick={() => {
                                    dispatch({type: "INCREASE_PRODUCT_QUANTITY", payload: productData})
                                    }
                                } >+</button>
                            </>
                        :
                            
                        <button className="functionalButtons" onClick={() => dispatch({type: "ADD_PRODUCT_TO_CART", payload: productData})}>Add to Cart</button>
                    }
                    
                </div>
                <h3 className="product">${productData.price}</h3>
            </span>
        </div>
        
    )
}

export default EachProduct;

