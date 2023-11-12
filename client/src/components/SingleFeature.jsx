import React from 'react';

const SingleFeature = ({ feature }) => {
    return (
        <>
            <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                <img src={feature?.imgURL} alt="Features" className='mx-auto object-contain' />
                <h6 className={`text-black/60 ${feature?.style} mt-4 p-1 text-xs md:text-base font-bold whitespace-nowrap rounded-sm`}>{feature?.title}</h6>
            </div>
        </>
    );
};

export default SingleFeature;