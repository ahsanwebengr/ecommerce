import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

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
        <article onClick={handleDetail} className='group cursor-pointer border p-3 rounded-xl bg-white hover:shadow-2xl transition-all duration-300 ease-in-out'>
            <div className="w-full h-80 overflow-hidden rounded-xl relative">
                <img src={product?.image} alt={product?.title} className='object-cover w-full h-full rounded-xl transition-all duration-400 ease-linear group-hover:scale-125 opacity-95 hover:opacity-100' />
                {product?.isNew && <h6 className='bg-black text-white absolute top-10 right-0 p-1 px-2 rounded-sm'>New Arrival</h6>
                }
            </div>
            <div className='my-3'>
                <h6 className='text-black/60 bg-purple-100 capitalize py-1 px-3 text-base font-bold rounded-sm tracking-widest inline '>{product?.category}</h6>
                <h2 className='text-xl md:text-3xl font-semibold capitalize my-3.5 text-gray-700 tracking-wide'>{product?.title}</h2>
                <div className='flex gap-3 text-2xl md:text-3xl'>
                    {renderRatingStars(product?.rating)}
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-2 items-center">
                        <h5 className='line-through text-gray-400 text-lg tracking-wide'>${product?.oldPrice}</h5>
                        <h5 className='font-semibold text-gray-800 text-2xl tracking-wide'>${product?.price}</h5>
                    </div>
                    <Link to={'cart'} className='text-2xl w-12 h-12 rounded-full bg-purple-100 text-purple-700 grid place-items-center hover:bg-purple-700 hover:text-white transition-all duration-200'> <FaShoppingCart /> </Link>
                </div>
            </div>
        </article >
    );
};

export default ProductCard;