import React from "react";
import { Link } from "react-router-dom";
import { logoDark } from "../assets/index";

const Header = () => {
    return (
        <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img className="w-28" src={logoDark} alt="logoDark" />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex item-center gap-8">
                        <Link to="/">
                            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                                Home
                            </li>
                        </Link>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Pages
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Shop
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Element
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Blog
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
