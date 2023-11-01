import React from 'react'
import ScrollToTopButton from '../Subcomponent/Scrolltop'
import WininternationalTradeBackground from '../Subcomponent/WininternationalTradeBackground.tsx'
import RegisterMembers from '../Subcomponent/RegisterMembers'



export interface Iwin_international_Trade { }

const Win_international_Trade: React.FunctionComponent<Iwin_international_Trade> = (props) => {
  return (
    <>
      
       <WininternationalTradeBackground />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card  border-white  text-center  p-3 mb-5 " >
              <a href="#"> <img src="images/international trade logo.jpeg" alt="..." style={{ "width": "15rem" ,"height": "15rem" }} className='img-fluid' /></a>

            </div>
          </div>
          <div className="col-md-4 textcard">
            <div className="card border-white  text-center mb-5 "  >
              <a href="#"> <img src="images/wininternatioanllogo2.png" alt="..." style={{ "width": "15rem" }} className='img-fluid ' /></a>

            </div>
          </div>
          <div className="col-md-4">
            <div className="card  border-white  text-center  p-3 mb-5 " >
              <a href="#"> <img src="images/pratikagrowinlogo.jpeg" alt="..." style={{ "width": "15rem", "height": "15rem" }} className='img-fluid' /></a>

            </div>
          </div>

        </div>
      </div>
      <ScrollToTopButton />
      <div className='container'>
        <h2 className='ourproduct container'>Welcome to Win International Trade</h2>
        <h1 className='mt-5'>Win International Is An Internationally<br/> 
                 Acclaimed Indenting & Sourcing Agent In India.</h1>
        <div className='mt-5'>
         <p>Our Main Activities Involves Promotion Of International Trade For Various Industries Such As Agro, Pesticides, Paints, Coating, Resins, Specialty Chemicals, Organics & Inorganics, Dyes, Pharma, Bulk Drugs & Api, Construction & Water Treatment, Electronics, Plastic And Polymers, Rubber & Textiles And Many Many More.<br/>
             Our Strength Lies In Serving And Representing World Renowned Makers, Suppliers & Importers. We Offer Highest Quality Chemicals According Your Specific Requirement.<br/>
           We Are Looking To Grow In The Field Of Pharmaceutical Intermediates. Our Primary Goal Is To Capture A Good Market In Pharmaceutical Intermediates Trading In India. "Excellence Is Customer Service" Has Been The Success Mantra Of The Company And We Strive To Grow As We Believe That Grow This Life.</p>
        </div>
      </div>


      <div className='container'>
        <h2 className='ourproduct container '>Win International Has</h2>
        
        <div className='mt-5'>
         
         <li> Reliable For Timely Delivery Of Quality Products In Large Outputs To Our Customers.</li>
         <li> Imports From Several Different Countries Like Germany, Finland, China, Korea, Usa, Netherland, South Africa, Etc.</li>
        </div>
      </div>


      <div className='container'>
        <h2 className='ourproduct container '>Our Mission</h2>
        
        <div className='mt-5'>
         
         
        <li> Stringent Quality Control Procedure For All Our Products.</li>
        <li>Always Delivering On Time.</li>
        <li>Continuous Review & Upgrading Of Systems.</li>
        <li>A Strong Commitment To Preserve The Environment</li>
        <li> Strong Infrastructure & A Proficient Team.  </li>              
        </div>
      </div>




      <div>
                <b><h2 className='ourproduct container text-center '>Members</h2></b>
            </div>
            <div>
                <b><h1 className=' container text-center mt-5'>Registered Member of</h1></b>
            </div>

            <RegisterMembers/>
            {/* <div className="container ">
                <div className="row g-5 mt-4">
                    <div className="col-md-3">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/CDBI 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-white text-center"   >
                            <a href="#"> <img src="images/DGFT 1.png" className="card-img-top logoesimage" alt="..." style={{ "width": "12rem" }} /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-white text-center" >
                            <a href="#"> <img src="images/ECGC 1.png" className="card-img-top" alt="..."  style={{ "width": "12rem" }}/></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/FSSAI 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }}/></a>
                            
                        </div>
                    </div>
                </div>
            </div> */}

    </>
  )
}

export default Win_international_Trade
