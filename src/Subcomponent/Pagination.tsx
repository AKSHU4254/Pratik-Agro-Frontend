


import React from 'react';

export interface PaginationProp {
  postPerPage: number;
  totalPost: number;
  currentPage?: number;
  paginate(arg0: number): void;
}

const Pagination = ({ postPerPage, totalPost, currentPage, paginate }: PaginationProp) => {
  const totalPages = Math.ceil(totalPost / postPerPage);

  if (totalPages === 1) {
    return null; // Don't show pagination if only one page is there
  }

  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        
        {pageNumber.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number - 1)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Pagination;