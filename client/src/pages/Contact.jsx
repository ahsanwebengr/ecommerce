import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import { BiTime } from 'react-icons/bi';
import { LuPhoneCall } from 'react-icons/lu';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <SectionBanner heading={`#Let'sTalk`} subHeading={'LEAVE A MESSAGE. We love from here you!'} bgImg={'cart-banner'} />
            <div className="container py-10">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-purple-600">Contact</p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">Get in Touch</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full pr-6">
                        <p className="mt-3 mb-12 text-lg text-gray-600 ">
                            Let us be your strategic partner in building a successful online store. Don't miss out on the opportunity to transform your business. Contact us today and take the first step towards e-commerce success.
                        </p>
                        <ul className="mb-6 md:mb-0">
                            <li className="flex">
                                <div className="btn btn-square btn-primary text-2xl text-gray-50">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                    </h3>
                                    <p className="text-gray-600 ">1230 Maecenas Street Donec Road</p>
                                    <p className="text-gray-600 ">New York, EEUU</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="btn btn-square btn-primary text-2xl text-gray-50">
                                    <LuPhoneCall className='text-white' />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                    </h3>
                                    <p className="text-gray-600 ">Mobile: +1 (123) 456-7890</p>
                                    <p className="text-gray-600 ">Mail: tailnext@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="btn btn-square btn-primary text-2xl text-gray-50">
                                    <BiTime />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Working
                                        hours</h3>
                                    <p className="text-gray-600 ">Monday - Friday: 08:00 - 17:00</p>
                                    <p className="text-gray-600 ">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shadow-lg p-5 md:p-12" id="form">
                        <h2 className="mb-4 text-2xl font-bold">LEAVE A MESSAGE</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">

                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="text" placeholder="Enter Name*"
                                            {...register('name', { required: 'Name required', })}
                                            className={`mb-2 w-full input input-bordered input-primary ${errors.name && 'border-red-500'}`}
                                        />
                                        {errors.name?.type === "required" && (
                                            <small className="text-red-500">{errors.name.message}</small>
                                        )}
                                    </div>

                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="email" placeholder="Enter Email Address*"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            className={`mb-2 w-full input input-bordered input-primary ${errors.email && 'border-red-500'}`}
                                        />
                                        {errors.email && (
                                            <small className='text-red-500'>{errors.email.message}</small>
                                        )}
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="text" placeholder="Enter Subject*"
                                            {...register('subject', { required: 'Subject required', })} className={`mb-2 w-full input input-bordered input-primary ${errors.subject && 'border-red-500'}`} />
                                        {errors.subject?.type === "required" && (
                                            <small className='text-red-500'>{errors.subject.message}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <textarea cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full textarea textarea-primary"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-block btn-primary text-white text-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </>
    );
};

export default Contact;