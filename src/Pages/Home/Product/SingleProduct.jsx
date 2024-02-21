import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {productId} = useParams();
    return (
        <div>
            <p>Product no. - {productId}</p>
        </div>
    );
};

export default SingleProduct;