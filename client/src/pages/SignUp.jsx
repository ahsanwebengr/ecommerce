import React, { useState } from 'react';
import { shopping } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setImageFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: image,
                }).then(() => {
                    toast.success(`${name} your account created`);
                }).catch((error) => {
                    console.error(error.message);
                });

                setEmail('');
                setPassword('');
                setImage('');
                setName('');

                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/email-already-in-use') {
                    toast.error('Email is already in use. Please use different email.');
                } else {
                    console.error(errorMessage);
                    toast.error(errorMessage);
                }
            });
    };


    return (
        <div className="w-full h-screen flex justify-center items-center py-10">
            <div className="lg:grid lg:grid-cols-2 w-full">
                {/* Left Grid (Sign Up Form) */}
                <div className="rounded-lg lg:rounded-r-none border bg-white lg:flex lg:justify-center lg:items-center lg:h-screen">
                    <div className="lg:w-[25rem] p-4 sm:w-full sm:h-[70vh] md:h-[60vh]">
                        <h2 className="text-3xl font-semibold mb-4">Sign Up Here</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image</label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered  w-full"
                                    accept="image/*"
                                    onChange={handleImageChange} />
                            </div>
                            {image && (
                                <img
                                    src={image}
                                    alt="Selected Image"
                                    style={{ maxWidth: '100px' }}
                                />
                            )}

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
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
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-purple-200"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <p className='my-4 text-gray-500 text-base'>Already have an account <Link to={'/login'} className='text-purple-600 font-semibold hover:underline'>Login</Link></p>

                            <button
                                type="submit"
                                className="btn bg-purple-700 hover:bg-purple-500 text-white btn-block text-lg"
                            >
                                Sign Up
                            </button>
                        </form>
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
    );
};

export default SignUp;
