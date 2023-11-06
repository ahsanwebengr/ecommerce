import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import { Blog1, Blog2, Blog3, Blog4 } from '../assets';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            imageSrc: Blog1,
            heading: 'The Cotton Jersey Zip-Up Hoddie',
            paragraph: 'The Cotton Jersey Zip-Up Hoodie is a comfortable and versatile addition to your wardrobe, perfect for casual days or layering with your favorite outfits. With its soft cotton fabric and convenient zipper closure, it combines style and practicality for a cozy and fashionable look.',
            date: "26/05",
        },
        {
            id: 2,
            imageSrc: Blog2,
            heading: `Women's Fancy Dress`,
            paragraph: `Elevate your style with our Women's Fancy Dress collection. From elegant evening gowns to chic cocktail dresses, our range offers a variety of fashionable options to suit every special occasion. Discover your perfect ensemble for a stunning and memorable look.`,
            date: "18/09",
        },
        {
            id: 3,
            imageSrc: Blog3,
            heading: 'Brand New Collection',
            paragraph: 'Explore our brand new collection, a curated selection of the latest trends and timeless classics. From fashion-forward designs to essential everyday pieces, our collection offers a fresh and exciting array of options for you to stay on the cutting edge of style. Discover the latest in fashion and elevate your wardrobe with our exquisite brand new additions.',
            date: "14/09",
        },
        {
            id: 4,
            imageSrc: Blog4,
            heading: 'Winter Female Collection',
            paragraph: 'Introducing our Winter Female Collection – a captivating ensemble of cozy and stylish clothing designed to keep you warm and fashion-forward throughout the chilly season. From luxurious knits to trendy outerwear, our collection combines comfort and elegance to help you embrace the winter months in style. Embrace the cold with confidence, courtesy of our winter essentials.',
            date: "13/02",
        }
    ];
    return (
        <>
            <SectionBanner heading={'#ReadMore'} subHeading={'Read all case studies about our Products'} bgImg={'blog-banner'} />
            <div className='container my-28'>
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-28'
                    >
                        <div className='relative'>
                            <img
                                src={post.imageSrc}
                                alt={post.heading}
                                className="max-h-[320px] w-full md:w-[540px] object-cover"
                            />
                            <h1 className=" absolute left-0 top-[-2.8rem] text-6xl font-semibold text-gray-400 z-[-2]">
                                {post.date}
                            </h1>
                        </div>
                        <div className='flex flex-col items-start justify-center space-y-3'>
                            <h1 className='text-2xl font-bold'>{post.heading}</h1>
                            <p className='text-gray-500'>{post.paragraph}</p>
                            <h3 className="bg-purple-700 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 cursor-pointer">
                                Continue Reading
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <NewsLetter />
        </>
    );
};

export default Blog;