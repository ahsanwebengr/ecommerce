import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className="flex justify-center my-4">
            <ul className="flex items-center flex-wrap gap-3">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={`btn btn-circle ${currentPage === page
                            ? 'btn-primary btn text-white'
                            : 'hover:btn-primary hover:text-white bg-transparent border-transparent'
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
