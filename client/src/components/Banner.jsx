import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="bg-hero-image bg-no-repeat bg-cover bg-center min-h-screen">
            <div className="py-6 px-4 md:px-8 max-w-screen-xl mx-auto flex justify-start items-center h-screen">
                <div className="">
                    <h4 className="text-xl md:text-3xl font-bold text-gray-800">Trade in Offer</h4>
                    <h2 className="text-3xl md:text-6xl font-bold my-2 text-gray-800">Super Value Deals</h2>
                    <h1 className="text-4xl md:text-7xl text-purple-700 font-bold">On all Products</h1>
                    <p className="text- md:text-xl text-gray-700 font-medium mt-5 mb-10">Save more with coupons and up to 70% Off</p>
                    <Link to={'/shop'} className="btn btn-outline btn-primary btn-wide rounded-full text-lg">Shop Now</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
