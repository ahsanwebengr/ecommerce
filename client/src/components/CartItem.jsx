import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { BiTrashAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { incrementQuantity, decrementQuantity, deleteItem, resetCart } from '../redux/counterSlice';

const CartItem = () => {
    const productData = useSelector((state) => state.counter.productData);
    const dispatch = useDispatch();
    return (
        <article className="">
            <div className="w-full">
                <h2 className="font-titleFont text-xl md:text-4xl font-bold capitalize">shopping cart</h2>
                <ul role="list" className="divide-y divide-gray-200 mt-3">
                    {productData.map((product) => (
                        <div key={product._id} className="">
                            <li className="flex py-6 sm:py-6 ">
                                <div className="flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="sm:h-38 sm:w-38 h-20 w-24 rounded-md object-contain object-center"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-lg md:text-2xl font-semibold">{product.title} </h3>
                                            </div>

                                            <div className="mt-1 flex  items-center gap-4">
                                                <p className="text-lg md:text-xl font-medium text-gray-800">
                                                    ${product.price}
                                                </p>
                                                <p className="text-lg md:text-xl font-medium text-green-500">5% Off</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="mb-2 flex">
                                <div className="min-w-24 flex items-center">
                                    <button onClick={() =>
                                        dispatch(
                                            decrementQuantity({
                                                _id: product._id,
                                                title: product.title,
                                                image: product.image,
                                                price: product.price,
                                                quantity: 1,
                                                description: product.description,
                                            })
                                        )
                                    } type="button" className="w-6 hover:bg-black hover:text-white p-1"> <AiOutlineMinus /> </button>
                                    <p className="mx-1 h-7 w-10 text-base rounded-md border text-center">{product.quantity}</p>
                                    <button onClick={() =>
                                        dispatch(
                                            incrementQuantity({
                                                _id: product._id,
                                                title: product.title,
                                                image: product.image,
                                                price: product.price,
                                                quantity: 1,
                                                description: product.description,
                                            })
                                        )
                                    } type="button" className="flex w-6 items-center justify-center hover:bg-black hover:text-white p-1"> <AiOutlinePlus /> </button>
                                </div>
                                <div className="ml-6 flex text-sm">
                                    <button type="button" onClick={() => dispatch(deleteItem(product._id)) & toast.error(`${product.title} is removed`)} className="flex items-center justify-center space-x-1 px-3 py-1  rounded-md hover:bg-red-100">
                                        <BiTrashAlt size={22} className="text-red-500" />
                                        <span className="text-lg font-medium text-red-500">Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <button onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty!")} className="btn btn-error text-white py-0 px-8 rounded-sm">Reset Cart</button>
            </div>
            <Link to="/">
                <button className="mt-8 flex items-center gap-1 text-gray-400 hover:text-black hover:underline underline-offset-2 decoration-gray-400 duration-300">
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