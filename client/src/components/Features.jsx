import React from 'react';
import { feature1, feature2, feature3, feature4, feature5, feature6 } from '../assets';
import SingleFeature from './SingleFeature';

const Features = () => {
    const featureData = [
        { id: 1, title: 'Free Shipping', style: 'bg-cyan-100', imgURL: feature1 },
        { id: 2, title: 'Online Order', style: 'bg-pink-100', imgURL: feature2 },
        { id: 3, title: 'Save Money', style: 'bg-green-100', imgURL: feature3 },
        { id: 4, title: 'Promotions', style: 'bg-blue-100', imgURL: feature4 },
        { id: 5, title: 'Happy Sell', style: 'bg-purple-100', imgURL: feature5 },
        { id: 6, title: '24/7 Support', style: 'bg-orange-100', imgURL: feature6 },

    ];
    return (
        <section className="py-16 md:py-20">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {
                        featureData.map((feature, index) => {
                            return <SingleFeature key={index} feature={feature} />;
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Features;