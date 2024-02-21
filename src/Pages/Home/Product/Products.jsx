import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('Product.json')
        .then (res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'> Our Products </h2>
            <div  className="products-container">
            {
                products.map (product => <Product
                key={product.id} 
                product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;