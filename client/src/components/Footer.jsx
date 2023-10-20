import React from "react";
import { app, brandLogo, pay, play } from "../assets";
import { ImGithub } from "react-icons/im";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
    return (
        <footer className="pt-10 pb-5 bg-gray-900">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="footer-1">
                        <img src={brandLogo} alt="Logo" className="mb-5 w-18" />
                        <ul className="flex flex-col gap-3 text-gray-700 text-base md:text-xl">
                            <li className="text-white/60"><b className="text-white">Address :</b> Okara , Pakistan</li>
                            <li className="text-white/60"><b className="text-white">Phone :</b> +92 - 3074961 - 938</li>
                            <li className="text-white/60"><b className="text-white">Hours :</b>10.00 - 18. 00</li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="text-xl md:text-3xl font-bold text-white mb-3">Follow Us</h4>
                            <div className="flex items-center gap-4">
                                <a href="https://www.facebook.com/ahsanmughal512/" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.instagram.com/ahsan__05/" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsInstagram />
                                </a>
                                <a href="https://github.com/Iamahsan512" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-2">
                        <h4 className="text-xl md:text-3xl font-bold text-white mb-3">About</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="./about.html">About Us</a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Delivery Information</a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Privacy & Policy </a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Terms & Conditions </a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="./contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-3">
                        <h4 className="text-xl md:text-3xl font-bold text-white mb-3">My Accounts</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Sign in</a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">View Cart</a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">My Wishlist </a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Track my Order </a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Help</a></li>
                        </ul>
                    </div>
                    <div className="footer-4">
                        <h4 className="text-xl md:text-3xl font-bold text-white mb-3">Install Application</h4>
                        <p className="text-lg text-white/90">From App Store or Google Play</p>
                        <div className="flex gap-2 items-center flex-wrap my-2.5">
                            <img src={app} alt="App" className="border-2 object-contain rounded-md" />
                            <img src={play} alt="Play" className="border-2 object-contain rounded-md" />
                        </div>
                        <p className="text-lg text-white/90 mb-2">Secured Payment Gateways</p>
                        <img src={pay} alt="pay" className="border-2 object-contain rounded-md p-2" />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p className="text-xl text-white/75"> © Copyright All right reserved by <span>Muhammad Ahsan</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
