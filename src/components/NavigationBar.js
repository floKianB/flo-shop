import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/css/repeatedComponent/navigationBar.css";

import cart from '../images/cart.png';
import user from '../images/user.png';

function NavigationBar() {
    return (
        <>
        <nav>
            <h2 className="logo">Flo Shop</h2>
            <div className="navigators">
                <Link className="eachNavigator" to='/'>Home</Link>
                <Link className="eachNavigator" to='/products'>Products</Link>
                <Link className="eachNavigator" to='/about'>About</Link>
                <Link className="eachNavigator" to='/support'>Support</Link>
            </div>
            <div className="mainLinksContainer">
                <Link className="cart" to='/shopping-cart'><img className="mainLinks" alt="cartIcon" src={cart} /></Link>
                <Link className="use" to='/user'><img className="mainLinks" alt="user-icon" src={user} /></Link>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar