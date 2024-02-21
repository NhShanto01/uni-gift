import React from 'react';
import Products from './Product/Products';
import Hero from './Banner/Hero';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;