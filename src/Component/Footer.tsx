import { Link } from "react-router-dom"




export interface IFooter{}

const Footer:React.FunctionComponent<IFooter> =(props)=>{
  return(
    <>
     <footer className='bg-dark text-white pt-5 pb-4'>
        <div className=' text-center text-md-left'>
            <div className='row text-center text-md-left'>
                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                    <img src="images/logo.png" alt="logo" className='navbar-brand mb-4' />
                    <p>PRATIK AGRO EXPORTS is one of the fastest growing company engaged in supplying and exporting a diverse range of Agro Products</p>
                    <div className="flex-container text-center justify-content-center">

                        <div>
                            <i className="bi bi-twitter  bg-success rounded-circle"></i>
                        </div>
                        <div>
                            <i className="bi bi-linkedin bg-success rounded-circle"></i>
                        </div>
                        <div>
                            <i className="bi bi-facebook bg-success rounded-circle "></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-2 col-xl-2 mx-auto mt-3'>
                     <h3>Contact Info</h3>
                     <h5>ADDRESS</h5>
                     <p>Near Jain Temple, At PO: Vasada, 
                       District: Navsari - 396580</p>
                       <h5>OFFICE ADDRESS</h5>
                     <p>Empire Business Hub, B-1313, Nr. Shukan Mall, 
                           Science City Road, Sola, Ahmedabad - 380060</p>

                       <h5>PHONE</h5>
                     <p>+91 99981 98011, +91 74339 55222</p>

                     <h5>EMAIL</h5>
                     <p>info@pratikagroexports.com
                      bhavin@pratikagroexports.com</p>

                </div>

                <div className='col-md-4 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h3>Main Menu</h3>
                    <p>
                        <Link to='/' className='text-white text-decoration-none'>Home</Link>
                    </p>
                    <p>
                        <Link to='/About' className='text-white text-decoration-none'>About Us</Link>
                    </p>
                    <p>
                        <Link to='/Cereals' className='text-white text-decoration-none'>Products</Link>
                    </p>
                    <p>
                        <Link to='/Gallery' className='text-white text-decoration-none'>Gallery</Link>
                    </p>
                    <p>
                        <Link to='/inquiry' className='text-white text-decoration-none'>Inquiry</Link>
                    </p>
                    <p>
                        <Link to='/win_international_Trade' className='text-white text-decoration-none'>Win International Trade</Link>
                    </p>
                    <p>
                        <Link to='/Get_in_touch' className='text-white text-decoration-none'>Get In Touch</Link>
                    </p>
                </div>

            </div>


           <hr className='mb-4'></hr>
            <div className='row align-item-center'>
                <div className='col-md-7 col-lg-8'>
                    <p>
                        © 2023 Pratik Agro Exports. All Rights Reserved.
                    </p>

                </div>
                 

            </div>
        </div>
     </footer>
    
    </>
  )
}

export default Footer