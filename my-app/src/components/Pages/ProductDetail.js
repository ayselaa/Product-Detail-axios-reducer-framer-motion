import React from 'react'
import { useParams } from 'react-router-dom';
import {list} from './product-list'

const ProductDetail = () => {

    const params = useParams();
    console.log(params);
    var result = list?.find(m => parseInt(m?.id) === parseInt(params?.id));
    return (
        <div>
            <h6>{result?.name}</h6>
            <h1>{result?.price}</h1>
        </div>
    )
}

export default ProductDetail
