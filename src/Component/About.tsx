import React from 'react'



export interface IAbout { }

const ABOUT: React.FunctionComponent<IAbout> = (props) => {
  return (
    <>
      <div className='aboutbg img-fluid'>
        <div className='abouttext text-white'>
          <h2 className='Headabouttext'>About Us</h2>
        </div>

      </div>

      <div className='container'>
        <div className='row mt-5'>
          <div className="col-md-6">
            <div>
              <h2 className="ourproduct">About Us</h2>
              <h1>Awesome work<br />
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


      < div className='mt-5 text-center'>
        <img src='images/AboutImage3.png' alt='img3' className='img-fluid' />
      </div>


      <div>
        <b><h2 className='ourproduct container '>Team</h2></b>
      </div>
      <div>
        <h1 className=' container mt-5 '>Key people in Pratik Agro Export</h1>
      </div>

      <div className="container">
        <div className="row g-5 mt-5">
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/people1.png" className="card-img-top img-fluid" alt="..."style={{ "width": "12rem" }} /></a>
              <div className='text-center'>
                <h2> Mahendra Shah</h2>
                <p>Founder</p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/people2.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }} /></a>
              <div className='text-center'>
                <h2>Bhavin Shah</h2>
                <p>Managing Director</p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center" >
              <a href="#"> <img src="images/people3.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }}/></a>
              <div className='text-center'>
                <h2>Anjali Shah</h2>
                <p>Director</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-4">
            <div className="card border-white text-center" >
              <a href="#"> <img src="images/people4.png" className="card-img-top img-fluid" alt="..." style={{ "width": "12rem" }}/></a>
              <div className='text-center'>
                <h2>Pratik Shah</h2>
                <p>Director</p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/people5.png" className="card-img-top img-fluid" alt="..."style={{ "width": "12rem" }} /></a>
              <div className='text-center'>
                <h2>Rahul Shah</h2>
                <p>C.A</p>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className=' row aboutbgmid'>
        <div className='aboutbgtextmid'>
          <div >
            <h2 className='ourproduct container '>Our Mission</h2>
            <p>Our aim is to provide best knowledge of products, high quality of products & service to our customers. we firmly believe in building long term business relationship with customers and this is what differentiates us from the competition.</p>
          </div>

        </div>

      </div>


      <div className='container'>
        <h2 className='ourproduct container '>Why Us?</h2>
        <h1>The countless reasons that make us the most preferred<br /> choice of our clients are</h1>
        <div className='mt-5'>
          <li>Tie-ups with reputed cleaning units all over the country</li>

          <li>Operations conducted under complete hygienic conditions</li>

          <li>Rigid quality control procedures</li>

          <li>Tamper proof packaging material used such as jute bags, polypropylene or multi-layer paper-bags with inner liner</li>

          <li>Containerization of export cargo</li>

          <li> Stuffing done under personal supervision</li>

          <li> Delivery of spices in fresh condition</li>

          <li> Registered Exporter with APEDA, spice Board of India, Coconut Development Board, India & Foreign Trade Department of India.</li>
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
              <a href="#"> <img src="images/Certificate1.png" className="card-img-top " alt="..."  style={{ "width": "12rem" }} /></a>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center"  >
              <a href="#"> <img src="images/Certificate2.png" className="card-img-top " alt="..."  style={{ "width": "12rem" }} /></a>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-white text-center" >
              <a href="#"> <img src="images/Certifiacte3.png" className="card-img-top" alt="..."   style={{ "width": "12rem" }}/></a>
              
            </div>
          </div>
        </div>
      </div>


      <div>
                <b><h2 className='ourproduct container text-center '>Members</h2></b>
            </div>
            <div>
                <b><h1 className=' container text-center '>Registered Member of</h1></b>
            </div>

            <div className="container ">
                <div className="row g-5 mt-4">
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/CDBI 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/DGFT 1.png" className="card-img-top logoesimage" alt="..."  style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/ECGC 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/FSSAI 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>
                            <div className="card-body">

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ABOUT
