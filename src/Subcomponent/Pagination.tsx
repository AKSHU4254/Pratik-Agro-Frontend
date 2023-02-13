


export interface PaginationProp {
    postPerPage: number,
    totalPost: number,
    paginate(arg0: number): void,
}

const Pagination = ({ postPerPage, totalPost, paginate }: PaginationProp) => {
    const pageNumber = [];
    for (let i = 1; i <= (totalPost / postPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <>
            <nav>
                 
                <ul className='pagination'>
                    {pageNumber.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => paginate(number - 1)} className='page-link'>{number}</button>
                        </li>

                    ))}
                </ul>
            </nav>



        </>
    )
}
export default Pagination