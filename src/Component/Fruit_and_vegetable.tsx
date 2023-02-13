import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Posts from '../Subcomponent/post_fruit_and_veg'

export type post = {
  id: number,
  title: string,
  image: string,
}

type IFruitandVeg = {}

const FruitandVeg  = (props:IFruitandVeg ) => {
  const[searchItem,setsearchItem] =useState('')

  const  search=(searchvalue:string)=>{
        setsearchItem(searchvalue)
  }
  const [post, setPost] = useState<post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get<post[]>('https://jsonplaceholder.typicode.com/posts');
      var data = Object.values(res.data);
      var x: post[] = [];
      data.forEach(element => {
        x.push({ "id": element.id, "title": element.title, "image": "https://avatars.githubusercontent.com/u/108678691?v=4" });
      });
      setPost(x);
    }
    fetchPost();
  }, [])


  return(
    <>
     
     <div className='fruitandvegbgproduct1 img-fluid'>
        <div className='abouttext text-white'>
          <h2 className='Headabouttext'>Fruits &
             Vegetables</h2>
        </div>

      </div>

      <div className='container'>
        <div className='row mt-5 '>
         <div className='col-md-8'>
         <Posts posts={post} searchItem={searchItem} />

         {/* <div className="row">
              <div className="column">
                <div className="card">
                  <h3>Card 5</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Card 6</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Card 7</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>


            </div> */}
          
            
         </div>
           
        
          <div className='col-md-4'>
            <div>
            <div className='searchBox'>
               <input type='search' className='searchText' placeholder='Search...'
               onChange={(e)=>search(e.target.value)}/>
               <a href='#' className='searchBtn'>
               <i className="bi bi-search"></i>
               </a>
            </div>
              <div className=' col-lg-2 col-xl-2 mt-3'>
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
              <div>
              <div className="col-md-3 ">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/freshveg.jpeg" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">
                                

                            </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default  FruitandVeg