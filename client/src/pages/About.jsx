import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import Features from '../components/Features';
import { AboutImg } from '../assets';

const About = () => {
    return (
        <>
            <SectionBanner heading={'#Know Us'} subHeading={'Visit Our Website and knew about Latest Products'} bgImg={'cart-banner'} />
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                    <img src={AboutImg} alt="about-img" className='w-full' />
                    <div className="flex flex-col">
                        <h4 className='text-gray-700 text-2xl md:text-4xl font-semibold mb-4'>Why we are Best?</h4>
                        <p className='text-gray-600 text-base md:text-lg tracking-wide mb-2'>Discover a vast array of products from leading brands and trusted sellers. We've curated a diverse selection of items to cater to your every need and desire. From fashion to electronics, home decor to wellness products, our catalog offers the perfect blend of quality and variety.</p>
                        <marquee className='bg-purple-700 text-white rounded-sm text-lg' scrollamount="5" loop="-1" width="100%">We have brand new outfit collection
                            of both summer and Winter season</marquee>
                    </div>
                </div>
                <Features />
            </div>
            <NewsLetter />
        </>
    );
};

export default About;