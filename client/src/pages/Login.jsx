import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { googleLogo, githubLogo, shopping } from '../assets';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/counterSlice';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';

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
                }, 500);
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


    const handleSignIn () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}
return (
    <>
        <div className="w-full h-screen flex justify-center items-center py-10">
            <div className="lg:grid lg:grid-cols-2 w-full">
                {/* Left Grid (Sign Up Form) */}
                <div className="rounded-lg lg:rounded-r-none border bg-white lg:flex lg:justify-center lg:items-center lg:h-screen">
                    <div className="lg:w-[25rem] p-4 sm:w-full sm:h-[70vh] md:h-[60vh]">
                        <h2 className="text-2xl font-semibold mb-4">Sign in to your Account</h2>
                        <form onSubmit={handleSignIn}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
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
                            <div className="mb-4 flex gap-1 items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id='remember'
                                    className='focus:ring-purple-400 focus:ring-1 rounded-md w-4 h-4'
                                    required
                                />
                                <label htmlFor="remember" className="block text-sm font-medium text-gray-600">Remember me</label>
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:ring-purple-200"
                            >
                                Login
                            </button>
                        </form>

                        <p className='mt-3 text-gray-500 text-base'>Don't have an account <Link to={'/signup'} className='text-purple-600 font-semibold hover:underline'>Create</Link></p>

                        <div className='text-center my-6 flex items-center justify-center'>
                            <span className='relative'>Or Continue with
                                <span className='absolute left-[-7.5rem] top-1/2 bg-slate-200 h-[1px] w-4/5 hidden md:block'></span>
                                <span className='absolute right-[-7.5rem] top-1/2 bg-slate-200 h-[1px] w-4/5 hidden md:block'></span>

                            </span>
                        </div>

                        <div className="my-8 grid grid-cols-2 gap-2">

                            <button onClick={googleLogin} className="bg-gray-800 text-white p-2 rounded flex items-center justify-center space-x-2 hover:bg-gray-600 transition-colors">
                                <AiOutlineGoogle />
                                <span> Google</span>
                            </button>

                            <button className="bg-gray-800 text-white p-2 rounded flex items-center justify-center space-x-2 hover:bg-gray-600 transition-colors">
                                <AiFillGithub />
                                <span> Github</span>
                            </button>
                        </div>
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
            </div >
        </div >
    </>
);
};

export default Login;