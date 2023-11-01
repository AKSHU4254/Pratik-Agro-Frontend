import { useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from '../Component/processed_food';
import Pagination from './Pagination';

export interface PostProp {
    posts: post[],
    searchItem:string
}

const PostsOfProcessedFood = ({ posts,searchItem }: PostProp) => {
    if (posts.length <= 0) {
        return <h2>Loading...</h2>
    }
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [postPerPage] = useState(10);
    const filteredPost = posts.filter((e)=>e.fname11.toLowerCase().includes(searchItem.toLowerCase()));
    const currentPost = filteredPost.slice(postPerPage * currentPage, postPerPage * (currentPage + 1))
    return (
        <>
            <div className="row">
                {currentPost.map((post, i) => {
                    return (
                        <div className="col-md-4">
                            <div className="card border-0 cerealscard mt-5">
                                
                                <img src={post.ProcessedFoodProductimg} alt="Cereals Product" style={{"height":"10rem","width":"10rem", "margin": "0 auto"}} />
                                <p className='text-center'>{post.fname11}</p>
                                <Link to={`/blog3/${post._id}`} type="button" className="btn Cerealsreadmore  ">Read More<span><i className="bi bi-chevron-right"></i></span></Link>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
            <Pagination postPerPage={postPerPage} totalPost={filteredPost.length} paginate={(e) => setCurrentPage(e)} />
        </>
    )
}
export default PostsOfProcessedFood