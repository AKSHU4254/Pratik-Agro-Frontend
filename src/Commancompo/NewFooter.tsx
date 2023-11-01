import React from 'react'
import { Link } from 'react-router-dom'

export default function NewFooter() {
  return (
    <footer className='footer'>
    <div className='container'>
      <div className='row g-3'>
        <div className='col-md-4 footer__column  p-5'>
        <img src="images/logo.png" alt="logo" className='navbar-brand mb-4 img-fluid' />
                    <p>PRATIK AGRO EXPORTS is one of the fastest growing company engaged in supplying and exporting a diverse range of Agro Products</p>
                    <div className="flex-container   homeText ">

                        <div>
                            <a href='https://twitter.com/PratikAgro' className='text-white'><i className="bi bi-twitter rounded-circle"></i></a>
                            
                        </div>
                        <div>
                            <a href='https://instagram.com/pratik.agro.exports?igshid=MmU2YjMzNjRlOQ==' className='text-white'><i className="bi bi-instagram  rounded-circle"></i></a>
                            
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/company/pratik-agro-exports/' className='text-white'><i className="bi bi-linkedin  rounded-circle"></i></a>
                            
                        </div>
                        <div>
                            <a href='https://www.facebook.com/pratikagroexports' className='text-white'><i className="bi bi-facebook  rounded-circle "></i></a>
                            
                        </div>
                    </div>
        </div>
        <div className='col-md-4 footer__column  p-5'>
        <h3>Contact Info</h3>
                     <h5>ADDRESS</h5>
                     <p>Near Jain Temple, At PO: Vasada, 
                       District: Navsari - 396580</p>
                       <h5>OFFICE ADDRESS</h5>
                     <p>Empire Business Hub, B-1313, Nr. Shukan Mall, 
                           Science City Road, Sola, Ahmedabad - 380060</p>

                       <h5>PHONE</h5>
                     <p><span><i className="bi bi-telephone">+91 99981 98011 </i></span><br/>
                     <span><i className="bi bi-telephone">+91 74339 55222</i></span></p>
                     

                     <h5>EMAIL</h5>
                     
                     <p><span><i className="bi bi-envelope"> info@pratikagroexports.com</i></span><br/>
                     <span><i className="bi bi-envelope"> bhavin@pratikagroexports.com</i></span></p>

        </div>
        <div className='col-md-4 footer__column  p-5'>
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
                        <Link to='/win_international_Trade' className='text-white text-decoration-none'>Win International</Link>
                    </p>
                    <p>
                        <Link to='/Get_in_touch' className='text-white text-decoration-none'>Get In Touch</Link>
                    </p>
        </div>
      </div>
      <hr ></hr>
           <div className='container'>
           <div className='row '>
               
                    <p className='homeText text-center'>
                        © 2023 Pratik Agro Exports. All Rights Reserved.
                    </p>

                
                 

            </div>
           </div>
    </div>
  </footer>
  )
}
