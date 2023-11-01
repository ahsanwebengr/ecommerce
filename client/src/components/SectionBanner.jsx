import React from 'react';

const SectionBanner = ({ heading, subHeading, bgImg }) => {
    return (
        <div className={`${bgImg} min-h-[400px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center flex-col`}>
            <h2 className='text-white capitalize text-3xl md:text-5xl font-bold mb-2.5'>{heading}</h2>
            <h5 className='text-white text-xl md:text-2xl font-medium tracking-wide'>{subHeading}</h5>
        </div>
    );
};

export default SectionBanner;