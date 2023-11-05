import React from 'react';
import { shopping } from '../assets';

function SignUp() {

    return (
        <div className="container h-screen flex justify-center items-center py-10">
            <div className="lg:grid lg:grid-cols-2 w-full">
                {/* Left Grid (Sign Up Form) */}
                <div className="rounded-lg lg:rounded-r-none border bg-white lg:flex lg:justify-center lg:items-center lg:h-screen">
                    <div className="lg:w-[25rem] p-4 sm:w-full sm:h-[70vh] md:h-[60vh]">
                        <h2 className="text-3xl font-semibold mb-4">Sign Up Here</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:ring-purple-200"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Grid (Image) */}
                <div className="hidden rounded-lg lg:rounded-r-none lg:block lg:w-full bg-white lg:h-screen" >
                    <img
                        src={shopping}
                        alt="E-commerce"
                        className='w-full h-full object-cover rounded-lg lg:rounded-l-none'
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
