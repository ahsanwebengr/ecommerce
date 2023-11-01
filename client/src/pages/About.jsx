import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import Features from '../components/Features';

const About = () => {
    return (
        <>
            <SectionBanner heading={'#Know Us'} subHeading={'Visit Our Website and knew about Latest Products'} bgImg={'cart-banner'} />
            <div className="container">
                <Features />
            </div>
            <NewsLetter />
        </>
    );
};

export default About;