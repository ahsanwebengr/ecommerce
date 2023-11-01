import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';

const Blog = () => {
    return (
        <>
            <SectionBanner heading={'#ReadMore'} subHeading={'Read all case studies about our Products'} bgImg={'blog-banner'} />
            <NewsLetter />
        </>
    );
};

export default Blog;