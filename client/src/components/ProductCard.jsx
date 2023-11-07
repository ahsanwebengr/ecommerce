import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/counterSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
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

    const _id = product.title;
    const idString = (_id) => {
        const lowerCaseTitle = String(_id).toLowerCase();
        const words = lowerCaseTitle.split(' ');
        const slug = words.join('-');
        return slug;
    };

    const rootId = idString(_id);
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: product
            }
        });
    };

    return (
        <article className='group cursor-pointer border p-3 rounded-xl bg-white hover:shadow-2xl transition-all duration-300 ease-in-out'>
            <div onClick={handleDetail} className="">
                <div className="w-full h-80 overflow-hidden rounded-xl relative">
                    <img src={product?.image} alt={product?.title} className='object-cover w-full h-full rounded-xl transition-all duration-400 ease-linear group-hover:scale-125 opacity-95 hover:opacity-100' />
                    {product?.isNew && <h6 className='bg-black text-white absolute top-10 right-0 p-1 px-2 rounded-sm'>New Arrival</h6>
                    }
                </div>
                <div className='my-3'>
                    <h6 className='text-black/60 bg-purple-100 capitalize py-1 px-3 text-base font-bold rounded-sm tracking-widest inline '>{product?.category}</h6>
                    <h2 className='text-xl md:text-2xl font-semibold capitalize my-3.5 text-gray-700 truncate tracking-wide'>{product?.title}</h2>
                    <div className='flex gap-3 text-2xl md:text-3xl'>
                        {renderRatingStars(product?.rating)}
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex gap-2 items-center">
                    <h5 className='line-through text-gray-400 text-lg tracking-wide'>${product?.oldPrice}</h5>
                    <h5 className='font-semibold text-gray-800 text-2xl tracking-wide'>${product?.price}</h5>
                </div>
                <button onClick={() => dispatch(addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description
                }))
                    && toast.success(`${product.title} added successfully`)

                } className='text-2xl w-12 h-12 rounded-full bg-purple-100 text-purple-700 grid place-items-center hover:bg-purple-700 hover:text-white transition-all duration-200'> <FaShoppingCart /> </button>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </article >
    );
};

export default ProductCard;