import React, { useEffect, useState } from 'react';
import NewsLetter from '../components/NewsLetter';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import SectionBanner from '../components/SectionBanner';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState('');
    const [payNow, setPayNow] = useState(false);
    const productData = useSelector((state) => state.counter.productData);
    const userInfo = useSelector((state) => state.counter.userInfo);
    const navigate = useNavigate();

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmount(price.toFixed(2));
    }, [productData]);

    const handleCheckout = () => {
        userInfo ? setPayNow(true) : toast.error('Please login to checkout!');
    };

    const payment = async (token) => {
        await axios.post('http://localhost:3000/pay', {
            amount: totalAmount * 100,
            token: token
        });
    };

    return (
        <section>
            <SectionBanner heading={'#Cart'} subHeading={'Daily Happy Shopping'} bgImg={'cart-banner'} />
            {
                productData?.length > 0 ? <div className="container flex flex-col gap-4 lg:flex-row py-10">
                    <div className='w-full lg:w-3/5'>
                        <CartItem />
                    </div>
                    <div className="w-full lg:w-2/5 py-6 px-4">
                        <h2 id="summary-heading" className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 md:text-2xl sm:p-4"> Price Details</h2>
                        <div>
                            <dl className=" space-y-1 px-2 py-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-base md:text-lg text-gray-800">Price ({productData.length} item)</dt>
                                    <dd className="text-base md:text-lg font-medium text-gray-900">$ {totalAmount}</dd>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <dt className="flex items-center text-base md:text-lg text-gray-800">
                                        <span>Discount</span>
                                    </dt>
                                    <dd className="text-base md:text-lg font-medium text-green-700">- $ 0</dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="flex text-base md:text-lg text-gray-800">
                                        <span>Delivery Charges</span>
                                    </dt>
                                    <dd className="text-base md:text-lg font-medium text-green-700">Free</dd>
                                </div>
                                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                    <dt className="text-base md:text-lg font-medium text-gray-900">Total Amount</dt>
                                    <dd className="text-base md:text-lg font-medium text-gray-900">$ {totalAmount}</dd>
                                </div>
                            </dl>
                            <button onClick={handleCheckout} className='btn btn-neutral text-lg text-white btn-block'>Proceed to Checkout</button>
                            <p className="px-2 pb-4 font-medium text-green-700 mt-4">You can save on this order using Redeem Codes</p>
                        </div>
                        {payNow && <div className="text-center">
                            <StripeCheckout
                                name="Cara Store"
                                label='Pay to Cara Store'
                                description={`Your payment amount is ${totalAmount}`}
                                amount={`${totalAmount * 100}`}
                                currency="USD"
                                stripeKey="pk_test_51O7uqSGK1VxuPahpbuSuWbp5hsQq0vwCerCTplRuL0nrteegpvQDclrOofCSFNfB4G2ns9nhmr2lY7syeOtk1HVd00DickofQF"
                                email={`${userInfo.email}`}
                                token={payment}
                                reconfigureOnUpdate={false}
                            >
                            </StripeCheckout>
                        </div>}
                    </div>
                </div> :
                    <div className="container flex flex-col justify-center items-center text-center py-10">
                        <h2 className='text-lg md:text-xl text-orange-600 font-medium'>Your cart is empty. Please go to back to Shopping and add  products to cart.</h2>
                        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black hover:underline underline-offset-2 decoration-gray-400 duration-300" onClick={() => navigate('/')}>
                            <span>
                                <HiOutlineArrowLeft />
                            </span>
                            Go to Shopping
                        </button>
                    </div>
            }
            <NewsLetter />
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
        </section>
    );
};

export default Cart;