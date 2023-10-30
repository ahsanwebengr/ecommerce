import React from "react";
import { app, brandLogo, pay, play } from "../assets";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-10 pb-5 w-full bg-gray-900 ">
            <div className="container">
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
                                <Link to="https://www.facebook.com/ahsanwebengr/" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsFacebook />
                                </Link>
                                <Link to="https://www.instagram.com/ahsan__ig/" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsInstagram />
                                </Link>
                                <Link to="https://www.linkedin.com/in/ahsanwebengr/" className="border-2 border-white text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-300 rounded-full flex items-center justify-center text-2xl" target="_blank">
                                    <BsGithub />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-2">
                        <h4 className="text-xl md:text-3xl font-bold text-white mb-3">About</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" to={'/about'}>About Us</Link></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Delivery Information</a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Privacy & Policy </a></li>
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Terms & Conditions </a></li>
                            <li><Link className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" to={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-3">
                        <h4 className="text-xl md:text-3xl font-bold text-white mb-3">My Accounts</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" href="">Sign in</a></li>
                            <li><Link className="hover:text-white hover:underline text-white/60 text-base md:text-xl font-medium" to={'/cart'}>View Cart</Link></li>
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
                    <p className="text-base md:text-xl text-white/75"> © Copyright All right reserved by <span>Muhammad Ahsan</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
