import React from 'react';
import { feature1, feature2, feature3, feature4, feature5, feature6 } from '../assets';

const Features = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature1} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-cyan-100 mt-4 p-1 text-base font-bold rounded-sm'>Free Shipping</h6>
                    </div>
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature2} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-pink-100 mt-4 p-1 text-base font-bold rounded-sm'>Online Order</h6>
                    </div>
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature3} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-green-100 mt-4 p-1 text-base font-bold rounded-sm'>Save Money</h6>
                    </div>
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature4} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-blue-100 mt-4 p-1 text-base font-bold rounded-sm'>Promotions</h6>
                    </div>
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature5} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-purple-100 mt-4 p-1 text-base font-bold rounded-sm'>Happy Sell</h6>
                    </div>
                    <div className="bg-white shadow-2xl rounded-md text-center py-6 px-3 border hover:shadow transition-all duration-150">
                        <img src={feature6} alt="Features" className='mx-auto object-contain'/>
                        <h6 className='text-black/60 bg-orange-100 mt-4 p-1 text-base font-bold rounded-sm'>24/7 Support</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;