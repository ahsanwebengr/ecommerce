import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/counterSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {
    const location = useLocation();
    const [details, setDetails] = useState({});
    const [baseQuantity, setBaseQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    const handleCart = () => {
        dispatch(addToCart({
            _id: details._id,
            title: details.title,
            image: details.image,
            price: details.price,
            quantity: baseQuantity,
            description: details.description
        })) && toast.success(`${details.title} added to cart`);
        navigate('/cart');
    };

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<AiFillStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <section className='py-10'>
            <div className="container flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-2/5 relative">
                    <img src={details?.image} alt={details?.title} className='object-cover w-full h-[350px]  md:h-[550px] rounded-sm' />
                    {details?.isNew && <h6 className='bg-black text-white absolute top-10 right-0 p-1 px-2 rounded-sm'>New Arrival</h6>
                    }
                </div>
                <div className="w-full md:w-3/5">
                    <h2 className='text-2xl md:text-4xl font-bold capitalize my-3.5 text-gray-700 tracking-wide'>{details?.title}</h2>
                    <div className="flex gap-2 items-center">
                        <h5 className='line-through text-gray-400 text-lg md:text-xl tracking-wide'>${details?.oldPrice}</h5>
                        <h5 className='font-bold text-green-600 text-xl md:text-3xl tracking-wide'>${details?.price}</h5>
                    </div>
                    <div className='flex gap-1 md:gap-3 items-center text-yellow-400 text-xl md:text-2xl my-8'>
                        {renderRatingStars(details?.rating)}
                        <p className='text-sm md:text-base text-gray-500'>({details?.rating} Customer review)</p>
                    </div>
                    <p className='text-lg text-gray-500'>{details.description}</p>
                    <div className="flex gap-3 items-center flex-wrap mb-3">
                        <div className="flex justify-between p-3 text-gray-500 items-center gap-4 border w-52 my-5">
                            <h6 className='text-sm'>Quantity</h6>
                            <div className='flex items-center gap-4 rounded-sm text-sm font-semibold'>
                                <button className='border p-2 hover:bg-gray-700 hover:text-white active:bg-black duration-150' onClick={() => setBaseQuantity(baseQuantity > 0 ? baseQuantity - 1 : 0)}> <AiOutlineMinus /> </button>
                                <span className='text-lg font-semibold'>{baseQuantity}</span>
                                <button className='border p-2 hover:bg-gray-700 hover:text-white active:bg-black duration-150' onClick={() => setBaseQuantity(baseQuantity + 1)}> <AiOutlinePlus /> </button>
                            </div>
                        </div>
                        <button onClick={handleCart} className='btn btn-neutral text-white rounded-sm'>Add to Cart</button>
                    </div>
                    <p className='text-lg text-gray-500'>Category : <span className='capitalize font-medium'>{details.category}</span></p>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default SingleProduct;