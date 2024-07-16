import { useState } from 'react';
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
  const [setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = e => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const blob = new Blob([file], { type: file.type });
        const objectURL = URL.createObjectURL(blob);
        setImage(objectURL);
        setImageFile(blob);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSignUp = e => {
    e.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            toast.success(`${name} your account created`);
          })
          .catch(error => {
            console.error(error.message);
          });

        setEmail('');
        setPassword('');
        setImage('');
        setName('');

        setLoading(false);
        navigate('/login');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          toast.error('Email is already in use. Please use different email.');
        } else {
          console.error(errorMessage);
          toast.error(errorMessage);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='w-full h-screen flex justify-center items-center py-10'>
      <div className='lg:grid lg:grid-cols-2 w-full'>
        {/* Left Grid (Sign Up Form) */}
        <div className='rounded-lg lg:rounded-r-none border bg-white lg:flex lg:justify-center lg:items-center lg:h-screen'>
          <div className='lg:w-[25rem] p-4 sm:w-full sm:h-[70vh] md:h-[60vh]'>
            <h2 className='text-3xl font-semibold mb-4'>Sign Up Here</h2>
            <form id='sign-up-form' onSubmit={handleSignUp}>
              <div className='mb-4'>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium text-gray-600'
                >
                  Username
                  <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='username'
                  autoComplete='autocomplete'
                  name='username'
                  className='input input-bordered input-primary w-full'
                  required
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='image'
                  className='block text-sm font-medium text-gray-600'
                >
                  Image
                </label>
                <input
                  type='file'
                  id='image'
                  className='file-input file-input-primary w-full'
                  accept='image/*'
                  onChange={handleImageChange}
                />
              </div>
              {image && (
                <img src={image} alt='Selected Image' style={{ maxWidth: '100px' }} />
              )}

              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-600'
                >
                  Email
                  <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  autoComplete='autocomplete'
                  name='email'
                  className='input input-bordered input-primary w-full'
                  required
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-600'
                >
                  Password
                  <span className='text-red-500'>*</span>
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='input input-bordered input-primary w-full'
                  required
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <p className='my-4 text-gray-500 text-base'>
                Already have an account{' '}
                <Link to={'/login'} className='link link-primary'>
                  Login
                </Link>
              </p>

              <button
                type='submit'
                className='btn bg-purple-700 hover:bg-purple-500 text-white btn-block text-lg'
              >
                {loading ? (
                  <span className='loading loading-spinner loading-sm'></span>
                ) : (
                  'Signup'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Grid (Image) */}
        <div className='hidden  lg:block lg:w-full bg-white lg:h-screen'>
          <img src={shopping} alt='E-commerce' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
