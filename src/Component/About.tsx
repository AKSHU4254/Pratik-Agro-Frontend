import React from 'react'
import AboutBackground from '../Subcomponent/AboutBackground'
import Aboutmiddlebgandtext from '../Subcomponent/Aboutmiddlebgandtext'
import AboutTeam from '../Subcomponent/AboutTeam'
import ScrollToTopButton from '../Subcomponent/Scrolltop'
import RegisterMembers from '../Subcomponent/RegisterMembers'


export interface IAbout { }

const ABOUT: React.FunctionComponent<IAbout> = (props) => {
  return (
    <>
      <AboutBackground />
      
      <div className='container'>
        <div className='row mt-5'>
          <div className="col-md-6">
            <div>
              <h2 className="aboutuspagetext">About Us</h2>
              <h1 className='mt-5'>Awesome work<br />
                by Pratik Agro Exports</h1>
              <p>PRATIK AGRO EXPORTS is one of the fastest growing company engaged in supplying and exporting a diverse range of Agro Products mainly Indian Basmati Rice, Non-Basmati Rice, Indian Spices & Herbs, Fresh Fruits & Vegetables and Other Agro Products. We are well known for our quality products and reliable services. </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src='images/Aboutus2image.png' alt='image' className='img-fluid' />
            </div>
          </div>

        </div>

      </div>
      <ScrollToTopButton />
      
        <div className=' container-fluid bgaboutimg1'>
        <img src='images/Aboutmiddlebg1.jpeg' alt='image' className='img-fluid 'style={{ "width": "12rem","height":"12rem" }} />
        </div>
          <div  className='container-fluid bgaboutimg2'>
          < div className='mt-5 text-center'>
        <img src='images/AboutImage3.png' alt='img3' className='img-fluid Aboutmiddleimg' />
      </div>
          </div>
        
        

     

       <AboutTeam />
      

      <Aboutmiddlebgandtext />


      <div className='container'>
        <h2 className='ourproduct container '>Why Us?</h2>
        <h1 className='mt-5'>The countless reasons that make us the most preferred<br /> choice of our clients are</h1>
        <div className='mt-5'>
         <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span> Tie-ups with reputed cleaning units all over the country<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span>Operations conducted under complete hygienic conditions<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span>Rigid quality control procedures<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span>Tamper proof packaging material used such as jute bags, polypropylene or multi-layer paper-bags with inner liner<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span>Containerization of export cargo<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span> Stuffing done under personal supervision<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span> Delivery of spices in fresh condition<br/>

          <span><img src='images/Aboutlistpic.jpeg' style={{ "width": "1rem" }} /></span> Registered Exporter with APEDA, spice Board of India, Coconut Development Board, India & Foreign Trade Department of India.<br/>
        </div>
      </div>


      <div>
        <h2 className='ourproduct container text-center mt-5 '>Why Us?</h2>
        <h1 className=" container text-center mt-5">Certified With</h1>
      </div>

      
      <div className="container">
        <div className="row g-5 mt-5">
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/Certificate1.png" className="card-img-top border border-dark img-fluid" alt="..."  style={{ "width": "12rem" }} /></a>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/Certificate2.png" className="card-img-top border border-dark img-fluid" alt="..."  style={{ "width": "12rem" }} /></a>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center" >
              <a href="#"> <img src="images/Certifiacte3.png" className="card-img-top border border-dark img-fluid" alt="..."   style={{ "width": "12rem" }}/></a>
              
            </div>
          </div>
        </div>
      </div>


      <div>
                <b><h2 className='ourproduct container text-center '>Members</h2></b>
            </div>
            <div>
                <b><h1 className=' container text-center mt-5'>Registered Member of</h1></b>
            </div>
            
            <RegisterMembers/>
            {/* <div className="container mb-5 ">
                <div className="row g-5 mt-4">
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/CDBI 1.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/DGFT 1.png" className="card-img-top logoesimag img-fluid" alt="..."  style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/ECGC 1.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/FSSAI 1.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  )
}

export default ABOUT
