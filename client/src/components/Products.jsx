import React from "react";
import ProductCard from "./ProductCard";
const Products = ({ products }) => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="flex flex-col items-center gap-2.5">
                    <h1 className="text-2xl sm:text-5xl font-bold  text-gray-800 p-2 text-center">
                        Feature Products
                    </h1>
                    <span className="w-20 h-[3px] bg-black"></span>
                    <p className="max-w-2xl text-gray-600 text-center">
                        Join our community of satisfied customers who have already found their happiness in shopping with us. Shop with confidence and discover the true meaning of happy shopping today.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;
