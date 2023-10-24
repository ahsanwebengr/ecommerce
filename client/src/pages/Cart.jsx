import React from 'react';
import NewsLetter from '../components/NewsLetter';

const Cart = () => {
    return (
        <section>
            <div className="cart-banner min-h-[400px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center flex-col">
                <h2 className='text-white capitalize text-3xl md:text-5xl font-bold mb-2.5'>#CART</h2>
                <h5 className='text-white text-xl md:text-2xl font-medium tracking-wide'>Daily Happy Shopping</h5>
            </div>
            <NewsLetter />
        </section>
    );
};

export default Cart;