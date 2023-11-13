import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { brandLogo, userAvatar } from "../assets/index";
import { HiOutlineMenuAlt1, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";

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
            name: "Contact",
            path: "/contact",
        }
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const productData = useSelector((state) => state.counter.productData);
    const userInfo = useSelector((state) => state.counter.userInfo);

    const handleSignOut = () => {
        signOut(auth).then(() => {

            dispatch(removeUser());
            navigate('/login');
            toast.success('Sign out Successfully');

        }).catch((error) => {
            toast.error('Sign out Error: ' + error);
        });
    };

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
                                <NavLink to={nav?.path} className="text-xl font-semibold text-gray-700 transition-all duration-150 hover:text-purple-700 hover:border-b-2 border-purple-700 ">{nav?.name}</NavLink>
                            </li>
                        ))
                    }
                    <li className="nav-items relative hidden md:block">
                        <Link to={'cart'}>
                            <HiOutlineShoppingCart size={30} className="text-gray-700" />
                            <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 shadow-md text-xs flex items-center justify-center font-semibold font-titleFont">
                                {productData.length}
                            </span>
                        </Link>
                    </li>
                    <li className="nav-items hidden md:block relative cursor-pointer" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <div className="flex gap-2 items-center">
                            <img src={userInfo ? userInfo?.image : userAvatar} alt="user-image" className="w-10 h-10 rounded-full border" />
                        </div>
                        <ul className={`${toggleDropdown ? "" : 'hidden'} bg-white shadow w-40 absolute left-[-120px] p-1.5 rounded-md z-10`} >
                            {
                                userInfo && <li className="p-2 border-b flex items-center gap-2 cursor-pointer">
                                    <FaUserAlt />
                                    <p className='decoration-gray-600 truncate'>{userInfo?.name}</p>
                                </li>
                            }
                            {
                                userInfo ? <li className="p-2 flex items-center gap-2 cursor-pointer" onClick={handleSignOut}>
                                    <IoExitOutline size={24} />
                                    <span>Logout</span>
                                </li>
                                    : <li className="p-2 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/login')}>
                                        <IoExitOutline size={24} className="rotate-180" />
                                        <span>Login</span>
                                    </li>
                            }
                        </ul>
                    </li>
                </ul>
                <div className="flex md:hidden gap-4 items-center">
                    <Link to={'/cart'} className="relative md:hidden">
                        <HiOutlineShoppingCart size={30} className="" />
                        <span className="absolute top-[-12px] right-[-15px] w-5 h-5 rounded-full text-white bg-purple-700 shadow-md text-xs flex items-center justify-center font-semibold font-titleFont">
                            {productData.length}
                        </span>
                    </Link>

                    <div className="relative" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <div className="md:hidden">
                            <img src={userInfo ? userInfo?.image : userAvatar} alt="user0image" className="w-10 h-10 rounded-full border" />
                        </div>
                        <ul className={`${toggleDropdown ? "" : 'hidden'} bg-white shadow w-40 absolute left-[-120px] p-1.5 rounded-md z-10`} >
                            {
                                userInfo && <li className="p-2 border-b flex items-center gap-2 cursor-pointer">
                                    <FaUserAlt />
                                    <p className='decoration-gray-600 truncate'>{userInfo?.name}</p>
                                </li>
                            }
                            {
                                userInfo ? <li className="p-2 flex items-center gap-2 cursor-pointer" onClick={handleSignOut}>
                                    <IoExitOutline size={24} />
                                    <span>Logout</span>
                                </li>
                                    : <li className="p-2 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/login')}>
                                        <IoExitOutline size={24} className="rotate-180" />
                                        <span>Login</span>
                                    </li>
                            }
                        </ul>
                    </div>
                    <span className="text-gray-700" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
                    </span>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </nav>
    );
};

export default Header;
