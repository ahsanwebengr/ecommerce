import React from 'react';
import NewsLetter from '../components/NewsLetter';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const productData = useSelector((state) => state.counter.productData);

    return (
        <section >
            <div className="cart-banner min-h-[400px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center flex-col">
                <h2 className='text-white capitalize text-3xl md:text-5xl font-bold mb-2.5'>#Cart</h2>
                <h5 className='text-white text-xl md:text-2xl font-medium tracking-wide'>Daily Happy Shopping</h5>
            </div>
            <div className="container flex py-10">
                <div className='w-3/5'>
                    <CartItem />
                </div>
                <div className="w-2/5 bg-gray-100 py-6 px-4">
                    <div className=''>
                        <h2 className='text-xl md:text-3xl font-medium text-gray-800 mb-3'>Cart Totals</h2>
                        <p className='text-basel md:text-lg text-gray-600 mb-4 flex gap-5'>Subtotal <span className='font-bold tracking-wide text-black'>$ 200</span></p>
                        <p className='text-basel md:text-lg text-gray-600 mb-4 flex gap-5'>Shipping <span className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, inventore.</span></p>
                        <hr className='border-gray-900 my-3' />
                        <p className='text-basel md:text-lg text-gray-600 flex justify-between items-center'>Total <span className='font-bold tracking-wide text-black'>$ 200</span></p>
                        <button className='text-white bg-black block w-full h-12 text-base md:text-lg font-medium rounded-sm mt-5 hover:opacity-90'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </section>
    );
};

export default Cart;