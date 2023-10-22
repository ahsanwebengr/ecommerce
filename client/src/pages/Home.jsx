import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Features from '../components/Features';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const productData = useLoaderData();
    
    useEffect(() => {
        setProducts(productData.data);
    }, [productData]);
    return (
        <>
            <Banner />
            <Features />
            <Products products={products} />
        </>
    );
};

export default Home;