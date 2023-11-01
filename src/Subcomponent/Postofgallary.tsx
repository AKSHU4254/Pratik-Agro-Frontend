import { useState } from 'react';
import { post } from '../Component/Gallery';
import Pagination from './Pagination';

export interface PostProp {
    posts: post[],
}

const PostsOfGallery = ({ posts }: PostProp) => {
    if (posts.length <= 0) {
        return <h2>Loading...</h2>
    }
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [postPerPage] = useState(16);
    const currentPost = posts.slice(postPerPage * currentPage, postPerPage * (currentPage + 1))
    return (
        <>
            {currentPost.map((post) => (
        <div className="col-md-3 mt-5" key={post.id}>
          <div className="card border-0 text-center bg-transparent">
            <img
              src={post.GallaryProductimg}
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        </div>
      ))}
            <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={(e) => setCurrentPage(e)} />
        </>
    )
}
export default PostsOfGallery