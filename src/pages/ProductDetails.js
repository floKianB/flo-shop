import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';




function ProductDetails() {
    const [thisItem, setThisItem] = useState(false);
    const products = useContext(ProductContext);
    const params = useParams();
    const paramsId = params.id;
    useEffect(()=>{
        setThisItem(products[paramsId])
    }, [products])

    return (
        <h2>{thisItem.name}</h2>
    )
}

export default ProductDetails