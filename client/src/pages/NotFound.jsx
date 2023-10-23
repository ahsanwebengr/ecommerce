import React from 'react';
import { NotFoundImg } from '../assets';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='py-10'>
            <div className="container flex items-center justify-center flex-col gap-3">
                <img src={NotFoundImg} alt="not Found Image" />
                <Link to={'/'} className="btn-brand">Go Back to Home</Link>
            </div>
        </section>
    );
};

export default NotFound;