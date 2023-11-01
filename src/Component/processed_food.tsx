import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Posts from '../Subcomponent/postOfproccesedfood'
import ProcessedFoodBackground from '../Subcomponent/ProcessedFoodBackground'

export type post={
  _id: number;
  ProcessedFoodProductimg: string;
  fname11: string;
}

type IProcessed_Food = {}

const Processed_Food  = (props:IProcessed_Food ) => {
  const[searchItem,setsearchItem] =useState('')

  const  search=(searchvalue:string)=>{
        setsearchItem(searchvalue)
  }
  const [post, setpost] = useState<post[]>([]);
  console.log(post)
  const getUserData4 = async () => {
    const res4 = await axios.get("https://pratik-agro-backend.vercel.app/getProcessedFoodproductimg", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res4.data.status === 401 || !res4.data) {
      console.log("error");
    } else {
      setpost(res4.data.getImage.reverse());
    }
  };

  useEffect(() => {
    getUserData4();
  }, []);


  return(
    <>
     
    

     <ProcessedFoodBackground />
      <div className='container'>
        <div className='row mt-5 '>
         <div className='col-md-8'>
         
          <Posts posts={post} searchItem={searchItem} />
          
            
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
              <div>
              <div className="col-md-3 ">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/processedfood.jpeg" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
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

export default Processed_Food