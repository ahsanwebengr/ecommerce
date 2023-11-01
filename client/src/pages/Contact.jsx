import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';

const Contact = () => {
    return (
        <>
            <SectionBanner heading={`#Let'sTalk`} subHeading={'LEAVE A MESSAGE. We love from here you!'} bgImg={'cart-banner'} />
            <div className="container"></div>
            <NewsLetter/>
        </>
    );
};

export default Contact;