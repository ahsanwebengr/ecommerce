import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { brandLogo, userAvatar } from "../assets/index";
import { HiOutlineMenuAlt1, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from "react-redux";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const productData = useSelector((state) => state.counter.productData);
    console.log(productData);
    return (
        <nav className="sticky top-0 left-0 shadow-xl z-40 w-full bg-white">
            <div className="container py-6 flex items-center justify-between">
                <Link to={'/'}>
                    <img src={brandLogo} alt="Logo" className="w-18" />
                </Link>
                <ul className={`${isSidebarOpen ? 'right-0' : 'right-[-100%]'} flex flex-col md:flex-row items-center justify-center gap-5 fixed md:static top-[86px]  w-72 md:w-auto h-screen md:h-auto bg-gray-200 shadow-lg md:shadow-none md:bg-transparent transition-all duration-200`}>
                    <li className="nav-items">
                        <NavLink to={'/'} className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:underline underline-offset-4 ">Home</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to={'/about'} className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:underline underline-offset-4 ">About</NavLink>
                    </li>
                    <li className="nav-items">
                        <a href="./shop.html" className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:underline underline-offset-4">Shop</a>
                    </li>
                    <li className="nav-items">
                        <a href="./blog.html" className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:underline underline-offset-4">Blog</a>
                    </li>
                    <li className="nav-items">
                        <NavLink to={'/contact'} className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:underline underline-offset-4">Contact</NavLink>
                    </li>
                    <li className="nav-items relative hidden md:block">
                        <Link to={'cart'}>
                            <HiOutlineShoppingCart size={30} className="text-gray-700" />
                            <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 text-xs flex items-center justify-center font-semibold font-titleFont">
                                {productData.length}
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="flex md:hidden gap-4 items-center">
                    <Link to={'/cart'} className="relative md:hidden">
                        <HiOutlineShoppingCart size={30} className="" />
                        <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 text-xs flex items-center justify-center font-semibold font-titleFont">
                            0
                        </span>
                    </Link>
                    <span className="text-gray-700" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
                    </span>

                </div>
            </div>
        </nav>
    );
};

export default Header;
