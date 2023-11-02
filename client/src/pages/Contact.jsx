import React from 'react';
import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import { BiTime } from 'react-icons/bi';
import { LuPhoneCall } from 'react-icons/lu';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <SectionBanner heading={`#Let'sTalk`} subHeading={'LEAVE A MESSAGE. We love from here you!'} bgImg={'cart-banner'} />
            <div className="container py-10">
                <div class="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-purple-600">Contact</p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">Get in Touch</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full pr-6">
                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                            Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                            sagittis ante, ac tincidunt sem venenatis ut.
                        </p>
                        <ul className="mb-6 md:mb-0">
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                    <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 ">
                                    <LuPhoneCall className='text-white' />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                    <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                                    <BiTime />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                        hours</h3>
                                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                    <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="h-fit max-w-6xl p-5 md:p-12" id="form">
                        <h2 class="mb-4 text-2xl font-bold">LEAVE A MESSAGE</h2>
                        <form id="contactForm">
                            <div class="mb-6">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Enter Name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" />
                                    </div>
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Enter Email Address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" />
                                    </div>
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="subject" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="subject" autocomplete="email" placeholder="Enter Subject" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" />
                                    </div>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="w-full bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
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