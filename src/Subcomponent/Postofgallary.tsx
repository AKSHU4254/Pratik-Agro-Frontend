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
    const [postPerPage] = useState(18);
    const currentPost = posts.slice(postPerPage * currentPage, postPerPage * (currentPage + 1))
    return (
        <>
            {currentPost.map((post) =>

                // <div className=' col-md-4' key={post.id} >
                //     <div className="card">
                //         <div className="card-body">
                //             <h5 className='card-title'>{post.title}</h5>
                //         </div>
                //         <div>
                //             <img src={post.image} style={{ "width": "12rem" }} />
                //         </div>
                //     </div>
                // </div>
                <div className="col-md-4"  key={post.id}>
                    <div className="card border-white mt-5 text-center p-5"  >
                         <img src={post.image} className="card-img-top img-fluid" alt="..." style={{ "width": "10rem" }} />
                        
                           
                           
                            

                        
                    </div>
                </div>
                // <div className='col-md-6' key={post.id}>
                //     <h5>{post.id}: {post.title}</h5>
                // </div>
            )}
            <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={(e) => setCurrentPage(e)} />
        </>
    )
}
export default PostsOfGallery