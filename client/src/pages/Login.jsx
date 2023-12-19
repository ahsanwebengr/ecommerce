import React, { useState } from 'react';
import { userAvatar } from '../assets';
import { shopping } from '../assets';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../redux/counterSlice';
import { AiOutlineGoogle } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            dispatch(
                addUser({
                    _id: user?.uid,
                    name: user?.displayName,
                    image: user?.photoURL ? user?.photoURL : userAvatar,
                    email: user?.email
                })
            );

            toast.success('Login successfully.');

            navigate('/');
        } catch (error) {
            const errorMessage = error.message;

            if (errorMessage === 'auth/invalid-login-credentials') {
                toast.error('Invalid login credentials.');
            }
            console.log(errorMessage);
        }
    };
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center py-10">
                <div className="lg:grid lg:grid-cols-2 w-full">
                    {/* Left Grid (Sign Up Form) */}
                    <div className="rounded-lg lg:rounded-r-none border bg-white lg:flex lg:justify-center lg:items-center lg:h-screen">
                        <div className="lg:w-[25rem] p-4 sm:w-full py-4">
                            <h2 className="text-2xl font-semibold mb-4">Sign in to your Account</h2>
                            <form onSubmit={handleSignIn}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input input-bordered input-primary w-full"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="input input-bordered input-primary w-full"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                                <div className="mb-4 flex gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id='remember'
                                        className='focus:ring-purple-400 focus:ring-1 rounded-md w-4 h-4'
                                    />
                                    <label htmlFor="remember" className="block text-sm font-medium text-gray-600">Remember me</label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white btn-block text-lg"
                                >
                                    Login
                                </button>
                            </form>

                            <p className='mt-3 text-gray-500 text-base'>Don't have an account <Link to={'/signup'} className='link link-primary'>Create</Link></p>

                            <div className="divider">OR</div>

                            <div className="my-8 w-full">
                                <button onClick={googleLogin} className="btn btn-neutral text-white btn-block text-lg">
                                    <AiOutlineGoogle />
                                    <span> Google</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid (Image) */}
                    <div className="hidden  lg:block lg:w-full bg-white lg:h-screen" >
                        <img
                            src={shopping}
                            alt="E-commerce"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;