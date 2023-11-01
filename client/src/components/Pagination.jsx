import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className="flex justify-center my-4">
            <ul className="flex items-center flex-wrap gap-3">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={`w-10 h-10 grid place-items-center rounded-full cursor-pointer ${currentPage === page
                            ? 'bg-purple-700 text-white  duration-200'
                            : 'hover:bg-purple-400 hover:text-white'
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
