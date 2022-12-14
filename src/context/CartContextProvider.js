import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedProducts: [],
    allProductsQuantity: 0,
    totalPrice: 0,
    checkedOut: false,
}

const totalCalculator = selectedItems => {
    const allProductsQuantity = selectedItems.reduce((total, eachProduct) => total + eachProduct.quantity, 0)
    const totalPrice = selectedItems.reduce((total, eachProduct) => total + eachProduct.price * eachProduct.quantity, 0).toFixed(2)
    console.log(totalPrice);
    return { allProductsQuantity, totalPrice }
}

const cartReducer = (state, {type, payload}) => {
    console.log(state.totalPrice)
    switch(type){
        case "ADD_PRODUCT_TO_CART":
            if(!state.selectedProducts.find(product => product.id === payload.id)){     // if selected item to added to cart is not in the cart ...
                state.selectedProducts.push({
                    ...payload,                                                         // taking all the information about selected product and save it in new object
                    quantity: 1,                                                        // add new key to object, which will count the number of this product in our cart
                })
            }
            return {
                ...state,
                selectedProducts: [...state.selectedProducts],
                ...totalCalculator(state.selectedProducts)
            }
        case "DELETE_PRODUCT":
            const newSelectedProducts = state.selectedProducts.filter(product => product.id !== payload.id)     // If there is a id in cart which is not equal to the selected id (which we wanna delete) ... we save it in this variable - filter it out
            return {
                ...state,
                ...totalCalculator(newSelectedProducts),
                selectedProducts: [...newSelectedProducts],                              // Return the new changed (deleted) products after filter
                
            }
        case "INCREASE_PRODUCT_QUANTITY":
            const indexIncrease = state.selectedProducts.findIndex(product => product.id === payload.id);
            state.selectedProducts[indexIncrease].quantity++;
            return {
                ...state,
                ...totalCalculator(state.selectedProducts),

            }
        case "DECREASE_PRODUCT_QUANTITY":
            const indexDecrease = state.selectedProducts.findIndex(product => product.id === payload.id)
            state.selectedProducts[indexDecrease].quantity--;
            return {
                ...state,
                ...totalCalculator(state.selectedProducts),
            }
        case "CHECK_OUT":                                                               // save the reciept of this order in another container; as future feature. 
            return {
                selectedProducts: [],
                productQuantity: 0,
                totalPrice: 0,
                checkedOut: true,
            }
        case "CLEAR":       
            return {
                selectedProducts: [],
                productQuantity: 0,
                totalPrice: 0,
                checkedOut: false,
            }
        default:
        return state;
    }    
}

export const CartContext = createContext()

function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider