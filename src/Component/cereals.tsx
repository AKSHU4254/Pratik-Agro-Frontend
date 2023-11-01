import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import CerealsBackground from '../Subcomponent/CerealsBackground';
import Posts from '../Subcomponent/Posts';


export type post={
  _id: number;
  cerealsProductimg: string;
  fname7: string;
}




type ICereals = {}

const Cereals = (props: ICereals) => {
  const[searchItem,setsearchItem] =useState('')
    console.log(searchItem)
  const  search=(searchvalue:string)=>{
        setsearchItem(searchvalue)
  }
  const [post, setpost] = useState<post[]>([]);
  console.log("Cerealas")
  console.log(post)
  const getUserData4 = async () => {
    const res4 = await axios.get("https://pratik-agro-backend.vercel.app/getCerealsProductImg", {
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



  return (
    <>

      {/* <div className='cerealbgproduct1 img-fluid'>
      <div className="text-block3">
                <p className='text-white text-decoration-none'><h1>Cereals</h1></p>
       </div>

      </div> */}
        <CerealsBackground />
      <div className='container'>
        <div className='row mt-5 '>
          <div className='col-md-8'>

            <Posts posts={post} searchItem={searchItem}/>

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


          </div>


          <div className='col-md-4'>

            {/* <form className="d-flex text-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

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
                <Link to='/Fruit_and_veg' className=' text-dark text-decoration-none'><span>Fruits and vegetables</span></Link>
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
                  <a href="#"> <img src="images/goodqualitycereal.jpeg" className="card-img-top " alt="..." style={{ "width": "12rem" }} /></a>
                  <div className="card-body">


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

export default Cereals