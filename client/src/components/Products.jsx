import React from "react";
import ProductCard from "./ProductCard";
const Products = ({ products }) => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-lg sm:text-2xl bg-black text-white p-2 w-55 md:w-80 text-center">
                        Shopping Everyday
                    </h1>
                    <span className="w-20 h-[3px] bg-black"></span>
                    <p className="max-w-2xl text-gray-600 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                        quos fugit inventore, cumque quae corporis ratione tenetur eos
                        voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
                        asperiores repudiandae assumenda quidem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 my-10">
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
