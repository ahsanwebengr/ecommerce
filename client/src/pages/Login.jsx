import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { googleLogo, githubLogo } from '../assets';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/counterSlice';

const Login = () => {
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
            toast.success('Sign out Successfully');

        }).catch((error) => {
            toast.error('Sign out Error: ' + error);
        });
    };
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex items-center justify-center gap-10">
                <div onClick={googleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-purple-600 cursor-pointer duration-300">
                    <img className="w-8" src={googleLogo} alt="googleLogo" />
                    <span className="text-sm text-gray-900"> Sign in with Google</span>
                </div>
                <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                    Sign Out
                </button>
            </div>
            <div className="w-full flex items-center justify-center gap-10">
                <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-purple-600 cursor-pointer duration-300">
                    <img className="w-8" src={githubLogo} alt="githubLogo" />
                    <span className="text-sm text-gray-900"> Sign in with Github</span>
                </div>

                <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                    Sign Out
                </button>
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
    );
};

export default Login;