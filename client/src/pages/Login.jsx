import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { googleLogo, githubLogo, shopping } from '../assets';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/counterSlice';

const Login = () => {
    const userInfo = useSelector((state) => state.counter.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        image: user.photoURL,
                        email: user.email
                    })
                );

                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            toast.success('Sign out Successfully');

        }).catch((error) => {
            toast.error('Sign out Error: ' + error);
        });
    };
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
                    <div className="rounded-lg md:rounded-r-none border h-full flex items-center justify-center flex-col w-full">
                        <h4 className='text-gray-800 font-bold text-2xl md:text-4xl mb-10 text-center'>Sign in to your account</h4>
                        <form action="" className='w-full px-2 md:px-8'>
                            <div className='flex flex-col gap-2 mb-2'>
                                <label htmlFor="email" className='text-base md:text-lg'>Email address</label>
                                <input type="email" id='email' className='border-2 rounded-md text-base md:text-lg p-1.5 w-full focus:border-purple-700 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 mb-2'>
                                <label htmlFor="password" className='text-base md:text-lg'>Password</label>
                                <input type="password" id='password' className='border-2 rounded-md text-base md:text-lg p-1.5 w-full focus:border-purple-700 focus:outline-none' />
                            </div>
                            <div className="flex justify-between my-4">
                                <div className="flex gap-1 items-center">
                                    <input type="checkbox" id="remember" className='w-4 h-4' />
                                    <label htmlFor="remember" className='text-xs md:text-base cursor-pointer'>Remember me</label>
                                </div>
                                <Link to={'/signup'} className='text-purple-700 hover:underline text-xs md:text-base'>Create new Account </Link>
                            </div>
                            <button className='bg-purple-700 text-base md:text-lg text-white w-full rounded-md p-2.5'>Sign in</button>
                        </form>
                        <span>Or continue with</span>
                    </div>
                    <div className="rounded-r-lg hidden md:block h-full">
                        <img src={shopping} alt="shopping-img" className='w-full h-full rounded-r-lg' />
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center gap-10 py-10">
                <div className="w-full flex items-center justify-center  flex-wrap gap-10">
                    <div onClick={googleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-purple-600 cursor-pointer duration-300">
                        <img className="w-8" src={googleLogo} alt="googleLogo" />
                        <span className="text-sm text-gray-900"> Sign in with Google</span>
                    </div>
                    {userInfo && <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                        Sign Out
                    </button>}

                </div>
                <div className="w-full flex items-center justify-center flex-wrap gap-10">
                    <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-purple-600 cursor-pointer duration-300">
                        <img className="w-8" src={githubLogo} alt="githubLogo" />
                        <span className="text-sm text-gray-900"> Sign in with Github</span>
                    </div>

                    {userInfo && <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                        Sign Out
                    </button>}

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
            </div>
        </>
    );
};

export default Login;