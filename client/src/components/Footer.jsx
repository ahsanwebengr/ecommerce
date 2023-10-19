import React from "react";
import { ImGithub } from "react-icons/im";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
    return (
        <footer className="bg-black text-[#949494]  font-titleFont">
            <div className="container px-2">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
                    <div className="flex flex-col gap-7">
                        <img className="w-32" src={logoLight} alt="logoLight" />
                        <img className="w-56" src={paymentLogo} alt="paymentLogo" />
                        <ul className="flex gap-5 text-lg text-gray-400">
                            <li><ImGithub className="hover:text-white duration-300 cursor-pointer" /></li>
                            <li>
                                <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                            </li>
                            <li>
                                <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                            </li>
                            <li>
                                <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                            </li>
                            <li>
                                <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
                        <ul className="text-base flex flex-col gap-2">
                            <ul>MBD,Ruwi, Muscat-Oman</ul>
                            <ul>Mobile: 00968 97859628</ul>
                            <ul>Phone: 00968 24769821</ul>
                            <ul>e-mail: bazar@gmail.com</ul>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                        <ul className="text-base flex flex-col gap-2">
                            <li className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                                <span className="text-lg">
                                    <BsPersonFill />
                                </span>
                                My Account
                            </li>
                            <li className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                                <span className="text-lg">
                                    <BsPaypal />
                                </span>
                                Checkout
                            </li>
                            <li className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                                <span className="text-lg">
                                    <FaHome />
                                </span>
                                Order Tracking
                            </li>
                            <li className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                                <span className="text-lg">
                                    <MdLocationOn />
                                </span>
                                Help & Support
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <input
                            className="bg-transparent border px-4 py-2 text-sm"
                            type="text"
                            placeholder="Email"
                        />
                        <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-white text-sm tracking-wide">© Copyright 2023 All right reserved by Muhammad Ahsan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
