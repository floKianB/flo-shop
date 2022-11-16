import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';




function ProductDetails() {
    const [thisItem, setThisItem] = useState(false);
    const params = useParams();
    const paramsId = params.id;
    let products = useContext(ProductContext);
    

    useEffect(() => {
        async function fetchData () {
            await setThisItem(products[paramsId]);
        }
        fetchData();
    }, [products])
    
    
    return (
        <>
            <h1>Details</h1>
            {thisItem!==undefined ? <h1>{thisItem.name}</h1> : <p>Loading ...</p>}
        </>
    )
}

export default ProductDetails