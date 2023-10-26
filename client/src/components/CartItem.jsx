import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <article className="">
            <div className="w-full">
                <h2 className="font-titleFont text-xl md:text-4xl font-bold capitalize">shopping cart</h2>
                <div>
                    <div>
                        <div className="flex items-center justify-between gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <span className=''>
                                    <MdOutlineClose className="text-2xl text-black hover:text-red-600 cursor-pointer duration-300" />
                                </span>
                                <img className="w-32 h-32 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="productImg" />
                            </div>
                            <h2 className="w-52">XYZ Product</h2>
                            <p className="w-10">$100</p>
                            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                                <p className="text-sm">Quantity</p>
                                <div className="flex items-center gap-4 text-sm font-semibold">
                                    <span className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"> - </span>
                                    100
                                    <span className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</span>
                                </div>
                            </div>
                            <p className="w-14">$500</p>
                        </div>
                    </div>
                    <button className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Cart</button>
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
        </article>
    );
};

export default CartItem;