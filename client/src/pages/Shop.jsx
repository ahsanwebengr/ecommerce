import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import NewsLetter from '../components/NewsLetter';
import SectionBanner from '../components/SectionBanner';


const Shop = () => {
    const productData = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData.data);
    }, [productData]);
    return (
        <>
            <SectionBanner heading={'#StayHome'} subHeading={'Save more with coupons and upto 70% Offer'} bgImg={'shop-banner'} />
            <div className='container py-10'>
                <div className="flex flex-col items-center gap-2.5">
                    <h1 className="text-2xl sm:text-5xl font-bold  text-gray-800 p-2 text-center">New Arrivals</h1>
                    <p className="max-w-2xl text-gray-600 text-center">All Brand New Collection with New Design</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
            <NewsLetter />
        </>
    );
};

export default Shop;