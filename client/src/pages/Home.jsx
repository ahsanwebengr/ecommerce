import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Features from '../components/Features';

const Home = () => {
    return (
        <>
            <Banner />
            <Features/>
            <Products />
            <Footer />
        </>
    );
};

export default Home;