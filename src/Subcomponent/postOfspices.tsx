import { useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from '../Component/Spices';
import Pagination from './Pagination';

export interface PostProp {
    posts: post[],
    searchItem:string
}

const PostsOfSpices = ({ posts,searchItem }: PostProp) => {
    if (posts.length <= 0) {
        return <h2>Loading...</h2>
    }
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [postPerPage] = useState(10);
    const filteredPost = posts.filter((e)=>e.fname13.toLowerCase().includes(searchItem.toLowerCase()));
    const currentPost = filteredPost.slice(postPerPage * currentPage, postPerPage * (currentPage + 1))
    return (
        <>
            <div className="row">
                {currentPost.map((post, i) => {
                    return (
                        <div className="col-md-4">
                            <div className="card border-0 cerealscard mt-5">
                                
                                <img src={post.SpiceProductimg} alt="Cereals Product" style={{"height":"10rem","width":"10rem", "margin": "0 auto"}} />
                                <p className='text-center'>{post.fname13}</p>
                                <Link to={`/blog4/${post._id}`} type="button" className="btn  Cerealsreadmore   ">Read More<span><i className="bi bi-chevron-right"></i></span></Link>
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
export default PostsOfSpices