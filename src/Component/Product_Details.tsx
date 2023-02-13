import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'



export type post = {
    id: number,
    title: string,


}




type IProduct_Details = {}




const Product_Details = (props: IProduct_Details) => {
    const [post, setPost] = useState<post[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get<post[]>('https://jsonplaceholder.typicode.com/posts');
            var data = Object.values(res.data);
            var x: post[] = [];
            data.forEach(element => {
                x.push({ "id": element.id, "title": element.title, });
            });
            setPost(x);
        }
        fetchPost();
    }, [])

    let { id } = useParams();

    let blog = post.find(post => post.id === parseInt(id!));
    console.log(blog)

    return (
        <>

            <div className='cerealbgproduct1 img-fluid'>
                <div className='abouttext text-white'>
                    <h2 className='Headabouttext'>Product Detail</h2>
                </div>

            </div>

            <div className='container'>
                <div className='row mt-5 '>
                    <div className='col-md-8'>
                        <Link type="button" to='/Cereals' className="btn btn-secondary mb-5"><i className="bi bi-arrow-bar-left"></i> Back</Link>
                        {/* <Posts posts={post} /> */}

                        {/* <div className="row">
              <div className="column">
                <div className="card">
                  <h3>Card 1</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Card 2</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Card 3</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>


            </div>  */}

                        <div className="col-6">
                            <div className="card border-light">
                                <h3>Demo Example </h3>
                                <p>{blog?.title}</p>
                                <p>{blog?.id}</p>
                                <div className="card-body  ">


                                </div>
                            </div>

                        </div>


                    </div>


                    <div className='col-md-4'>

                        <div className='searchBox'>
                            <input type='search' className='searchText' placeholder='Search...' />
                            <a href='#' className='searchBtn'>
                                <i className="bi bi-search"></i>
                            </a>
                        </div>
                        <div className=' col-lg-2 col-xl-2  mt-3'>
                            <h3>Category</h3>
                            <p>
                                <NavLink to='/Cereals' className=' text-dark text-decoration-none'>Cereals</NavLink>
                            </p>
                            <p>
                                <Link to='/Fruit_and_veg' className=' text-dark text-decoration-none'>Fruits and vegetables </Link>
                            </p>
                            <p>
                                <Link to='/Processed_food' className=' text-dark text-decoration-none'>Processed Food</Link>
                            </p>
                            <p>
                                <Link to='/Spices' className=' text-dark text-decoration-none'>Spices</Link>
                            </p>
                        </div>
                        <div className="col-md-3 ">
                            {/* <div className="card border-white text-center"  >
                                <a href="#"> <img src="images/goodqualitycereal.jpeg" className="card-img-top " alt="..." style={{ "width": "12rem" }} /></a>
                                <div className="card-body">


                                </div>
                            </div> */}
                            
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Product_Details