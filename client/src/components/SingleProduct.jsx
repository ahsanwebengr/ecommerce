import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const SingleProduct = () => {
    const location = useLocation();
    const [details, setDetails] = useState({});

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    return (
        <section className='py-10'>
            <div className="container flex items-center gap-4">
                <div className="w-2/5 relative">
                    <img src={details?.image} alt={details?.title} className='object-cover w-full h-[550px] rounded-sm' />
                    {details?.isNew && <h6 className='bg-black text-white absolute top-10 right-0 p-1 px-2 rounded-sm'>New Arrival</h6>
                    }
                </div>
                <div className="w-3/5 ">
                    <h2 className='text-2xl md:text-4xl font-bold capitalize my-3.5 text-gray-700 tracking-wide'>{details?.title}</h2>
                    <div className="flex gap-2 items-center">
                        <h5 className='line-through text-gray-400 text-xl tracking-wide'>${details?.oldPrice}</h5>
                        <h5 className='font-bold text-gray-800 text-3xl tracking-wide'>${details?.price}</h5>
                    </div>
                    <div className='flex gap-3 items-center text-gray-800 text-xl md:text-2xl my-8'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <p className='text-base text-gray-500'>({details?.rating} Customer review)</p>
                    </div>
                    <p className='text-lg text-gray-500'>{details.description}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;