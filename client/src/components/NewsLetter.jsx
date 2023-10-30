const NewsLetter = () => {
    return (
        <section className='bg-newsletter bg-gray-900 min-h-[400px] flex items-center'>
            <div className="container">
                <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
                    <div className="text-white">
                        <h2 className='text-2xl md:text-4xl font-bold mb-5'>Sign Up for Newsletters</h2>
                        <p className='text-base md:text-lg'>Get E-mail updates about your latest shope and <span className='text-amber-500 font-medium'>Special Offers</span></p>
                    </div>
                    <div className="flex h-14 rounded-md">
                        <input type="email" placeholder="Email Address" className='grow h-full rounded-l-md pl-2.5 text-base md:text-xl focus:outline-none' />
                        <button type="submit" className="w-24 sm:w-32 bg-purple-700 hover:bg-purple-600 h-full rounded-r-md text-white font-semibold text-base md:text-xl">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;