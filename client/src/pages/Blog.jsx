import SectionBanner from '../components/SectionBanner';
import NewsLetter from '../components/NewsLetter';
import { Blog1, Blog2, Blog3, Blog4 } from '../assets';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            imageSrc: Blog1,
            heading: 'The Cotton Jersey Zip-Up Hoddie',
            paragraph: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imgText: "26/05",
        },
        {
            id: 2,
            imageSrc: Blog2,
            heading: 'The Cotton Jersey Zip-Up Hoddie',
            paragraph: ' amet Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imgText: "18/09",
        },
        {
            id: 3,
            imageSrc: Blog3,
            heading: 'The Cotton Jersey Zip-Up Hoddie',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imgText: "14/09",
        },
        {
            id: 4,
            imageSrc: Blog4,
            heading: 'The Cotton Jersey Zip-Up Hoddie',
            paragraph: 'Lorem ipsum dolor Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imgText: "13/02",
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
                                className="h-[320px] w-full md:w-[540px] object-cover"
                            />
                            <h1 className=" absolute left-0 top-[-2.8rem] text-6xl font-semibold text-gray-400 z-[-2]">
                                {post.imgText}
                            </h1>
                        </div>
                        <div className='flex flex-col items-start justify-center space-y-3'>
                            <h1 className='text-2xl font-bold'>{post.heading}</h1>
                            <p className='text-gray-500'>{post.paragraph}</p>
                            <h3 className="bg-purple-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 cursor-pointer">
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