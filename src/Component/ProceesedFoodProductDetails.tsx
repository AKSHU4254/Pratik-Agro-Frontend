import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import ProceesedFoodDetailsBackground from '../Subcomponent/ProceesedFoodDetailsBackground'
export type post = {
    id:number,
    fname11:string,
    ProcessedFoodProductimg:string,
    ProcessedProductDescriptio:string
  }

export default function ProceesedFoodProductDetails() {
    const [post, setpost] = useState<string>("");
    const [postimg, setpostimg] = useState<string>("");
    const [postDescription, setpostDescription] = useState<string>("");
    
  console.log(post)
 let{id}=useParams()
 console.log(id)

 const getData = async () => {
  const res7 = await fetch(`https://pratik-agro-backend.vercel.app/getProcessedFoodProductimg/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data3 = await res7.json();

  if (res7.status === 422 || !data3) {
    console.log("error");
  } else {
    console.log(data3);
  setpost(data3.fname11);
  setpostimg(data3.ProcessedFoodProductimg)
  setpostDescription(data3.ProcessedProductDescriptio)
}
};
useEffect(() => {
  getData();
}, []);

const history = useNavigate();
const handleRefresh = () => {
    history("/Processed_food");
  };
    return (
        <>

            <ProceesedFoodDetailsBackground/>

            <div className='container'>
                <div className='row mt-5 '>
                    <div className='col-md-8'>
                        
                       

                        <div className="col-6">
                            <div className="card border-0">
                               
                                <img src={postimg} alt="Fruit&Veg Product" style={{"height":"auto","width":"100%", "margin": "0 auto"}} />
                                <h3 style={{"height":"auto","width":"100%", "margin": "0 auto"}}  className='mt-2'>{post}</h3>
                                <p style={{ "margin": "0 auto" }} className='mt-5'>{postDescription}</p>
                                <div className="card-body">


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
                        
                        <div className='mb-5 mt-5' >
                             <div className='Productdetailsimage img-fluid'>

                             </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
