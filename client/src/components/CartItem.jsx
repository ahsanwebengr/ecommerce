import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { incrementQuantity, decrementQuantity, deleteItem, resetCart } from '../redux/counterSlice';

const CartItem = () => {
    const productData = useSelector((state) => state.counter.productData);
    const dispatch = useDispatch();
    console.log(productData);
    return (
        <article className="">
            <div className="w-full">
                <h2 className="font-titleFont text-xl md:text-4xl font-bold capitalize">shopping cart</h2>
                <div>
                    {productData?.map((item) => (
                        <div key={item?._id}>
                            <div className="flex items-center flex-wrap justify-between gap-2.5 mt-6">
                                <div className="flex items-center gap-2">
                                    <span className=''>
                                        <MdOutlineClose onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.title} is removed`)} className="text-2xl text-black hover:text-red-600 cursor-pointer duration-300" />
                                    </span>
                                    <img className="w-28 h-28 object-cover" src={item?.image} alt="productImg" />
                                </div>
                                <h2 className="w-52">{item.title}</h2>
                                <p className="w-10">${item.price}</p>
                                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                                    <p className="text-sm">Quantity</p>
                                    <div className="flex items-center gap-4 text-sm font-semibold">
                                        <button className='border p-2 hover:bg-gray-700 hover:text-white active:bg-black duration-150' onClick={() =>
                                            dispatch(
                                                decrementQuantity({
                                                    _id: item._id,
                                                    title: item.title,
                                                    image: item.image,
                                                    price: item.price,
                                                    quantity: 1,
                                                    description: item.description,
                                                })
                                            )
                                        }> <AiOutlineMinus /> </button>
                                        {item.quantity}
                                        <button className='border p-2 hover:bg-gray-700 hover:text-white active:bg-black duration-150'
                                            onClick={() =>
                                                dispatch(
                                                    incrementQuantity({
                                                        _id: item._id,
                                                        title: item.title,
                                                        image: item.image,
                                                        price: item.price,
                                                        quantity: 1,
                                                        description: item.description,
                                                    })
                                                )
                                            } > <AiOutlinePlus /> </button>
                                    </div>
                                </div>
                                <p className="w-14">${item.quantity * item.price}</p>
                            </div>
                        </div>
                    ))}
                    <button onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty!")} className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Cart</button>
                </div>
            </div>
            <Link to="/">
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    Go to Shopping
                </button>
            </Link>
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
        </article>
    );
};

export default CartItem;