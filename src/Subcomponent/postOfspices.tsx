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
    const filteredPost = posts.filter((e)=>e.title.toLowerCase().includes(searchItem.toLowerCase()));
    const currentPost = filteredPost.slice(postPerPage * currentPage, postPerPage * (currentPage + 1))
    return (
        <>
            <div className="row">
                {currentPost.map((post, i) => {
                    return (
                        <div className="col-4">
                            <div className="card border-light">
                                <h3>cards Spices</h3>
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                                <Link to={`/blog/${post.id}`} type="button" className="btn btn-success  ">Read More<span><i className="bi bi-chevron-right"></i></span></Link>
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