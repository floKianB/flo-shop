import React, { useContext } from 'react'

import { ProductContext } from '../context/ProductContextProvider';

import Product from '../components/Product';

function Home() {
    const products = useContext(ProductContext)
    console.log(products)
    return (
        <div>
        {
            products.map(product => <Product key={product.id} productData={product}/>)
        }
        </div>

    )
}

export default Home;