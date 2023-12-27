import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { brandLogo, userAvatar } from "../assets/index";
import { HiOutlineMenuAlt1, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const Header = () => {
    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "About",
            path: "/about",
        },
        {
            id: 3,
            name: "Shop",
            path: "/shop",
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog",
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact",
        }
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const productData = useSelector((state) => state.user.productData);



    return (
        <nav className="sticky top-0 left-0 shadow-xl z-40 w-full bg-white">
            <div className="container py-6 flex items-center justify-between">
                <Link to={'/'}>
                    <img src={brandLogo} alt="Logo" className="w-18" />
                </Link>
                <ul className={`${isSidebarOpen ? 'right-0' : 'right-[-100%]'} flex flex-col md:flex-row items-center justify-center gap-5 fixed md:static top-[86px]  w-72 md:w-auto h-screen md:h-auto bg-gray-200 shadow-lg md:shadow-none md:bg-transparent transition-all duration-200`}>
                    {
                        navLinks.map(nav => (
                            <li className="nav-items" key={nav.id} onClick={() => setIsSidebarOpen(false)}>
                                <NavLink to={nav?.path} className="text-xl font-semibold text-gray-700 transition-all duration-150 border-b-2 border-transparent hover:text-purple-700 hover:border-b-2 hover:border-purple-700 ">{nav?.name}</NavLink>
                            </li>
                        ))
                    }
                    <li className="nav-items relative hidden md:block">
                        <Link to={'cart'}>
                            <HiOutlineShoppingCart size={30} className="text-gray-700" />
                            <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 shadow-md text-xs flex items-center justify-center font-semibold font-titleFont">
                                {productData?.length}
                            </span>
                        </Link>
                    </li>
                    <li className="nav-items hidden md:block relative cursor-pointer">
                        <DropDown />
                    </li>
                </ul>
                <div className="flex md:hidden gap-4 items-center">
                    <Link to={'/cart'} className="relative md:hidden">
                        <HiOutlineShoppingCart size={30} className="" />
                        <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 shadow-md text-xs flex items-center justify-center font-semibold font-titleFont">
                            {productData?.length}
                        </span>
                    </Link>

                    <DropDown />
                    <span className="text-gray-700" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
