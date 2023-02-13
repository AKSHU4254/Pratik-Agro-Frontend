import React from 'react'
import { Link } from 'react-router-dom'



export interface IHomepagesub { }

const Homepagesub: React.FunctionComponent<IHomepagesub> = (props) => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-light slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="images/1image.png" className="d-block w-100" alt="..." />
                        <div className='abouttext text-white'>
                            <h2 className='Headabouttext'>Other Cereals</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/1image.png" className="d-block w-100" alt="..." />
                        <div className='abouttext text-white'>
                            <h2 className='Headabouttext'>Other Cereals</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/1image.png" className="d-block w-100" alt="..." />
                        <div className='abouttext text-white'>
                            <h2 className='Headabouttext'>Other Cereals</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <b><h2 className='ourproduct container '>Our Products</h2></b>
            </div>
            <div>
                <h1 className=' container mt-5 '>Awesome products created <br />
                    by Pratik Agro Exports</h1>
            </div>

            <div className="container">
                <div className="row g-5 mt-2">
                    <div className="col-md-4">
                        <div className="card border-white text-center" >
                            <a href="#"> <img src="images/basmaticard.png" className="card-img-top" alt="..." /></a>
                            <div className="card-body  ">
                                <button type="button" className="btn btn-transparent homebutton bg-white">Basmati Rice<span><i className="bi bi-chevron-right"></i></span></button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/wheatcard.png" className="card-img-top" alt="..." /></a>
                            <div className="card-body">

                                <button type="button" className="btn btn-transparent bg-white">Wheat<span><i className="bi bi-chevron-right"></i></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-white text-center" >
                            <a href="#"> <img src="images/cerealscard.png" className="card-img-top" alt="..." /></a>
                            <div className="card-body">

                                <button type="button" className="btn btn-transparent bg-white">Cereals<span><i className="bi bi-chevron-right"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <b><h1 className='homepagemiddletext container mb-5'>
                    <span style={{ "color": "#9ACE4C" }} className='quality'>Quality food is</span> <span style={{ "color": "#CE4C5C" }}>the most </span><br />
                    <span style={{ "color": "#351B7D" }}>Important thing</span> <span style={{ "color": "#CE734C" }}>in our life</span>
                </h1></b>
            </div>


            {/* <div className='bg mt-5 mb-5 '>
                <div className='text'>
                    <div >
                        <h3 style={{ "color": "#9ACE4C" }} className="aboutus"><b>About Us</b></h3>
                        <h1>Awesome work<br />
                            by Pratik Agro Exports</h1>
                        <p className='mt-5'>Pratik Agro Exports engaged in the business of processing,<br /> supplying and exporting of FOOD, SPICES, PULSES and<br /> GENERAL PROVISIONS which includes Rice, Wheat, Maize ,<br /> Fresh Fruits and Vegetables and rage of Indian Spices. We<br /> established our organization with the intent to serve the<br /> Asian Community all over the world, specifically for those<br /> having a liking for Indian Foods & Flavours. We offer these<br /> products in various customized packaging that allows us to<br /> meet the specific requirements of our clients.<br />
                            Our tie-ups with reputed suppliers help us to cater to the <br />requirements of clients based in every corner of world. Our<br /> reputed suppliers who are equipped with advanced and <br /> automatic machineries that completely eliminate the human <br />error and the processing is done under the most hygienic <br />conditions.</p>

                    </div>

                </div>

            </div> */}
            <div className=' row bg mt-5 mb-5'>
                <div className='text'>
                    <div >
                        <h3 style={{ "color": "#9ACE4C" }} className="aboutus"><b>About Us</b></h3>
                        <h1>Awesome work<br />
                            by Pratik Agro Exports</h1>
                        <p>Pratik Agro Exports engaged in the business of processing, supplying and exporting of FOOD, SPICES, PULSES and GENERAL PROVISIONS which includes Rice, Wheat, Maize , Fresh Fruits and Vegetables and rage of Indian Spices. We established our organization with the intent to serve the Asian Community all over the world, specifically for those having a liking for Indian Foods & Flavours. We offer these products in various customized packaging that allows us to meet the specific requirements of our clients.
                            Our tie-ups with reputed suppliers help us to cater to the requirements of clients based in every corner of world. Our reputed suppliers who are equipped with advanced and  automatic machineries that completely eliminate the human error and the processing is done under the most hygienic conditions</p>
                    </div>

                </div>

            </div>


            <div className="container">
                <div className="row g-5 logoesrow">
                    <div className="col-md-3">
                        <div className="card  border-white text-center" >
                            <a href="#"> <img src="images/Bio.jpeg" className="card-img-top" alt="..." style={{ "width": "10rem" }} /></a>
                            <div className="card-body">


                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-white text-center"   >
                            <a href="#"> <img src="images/Natural.jpeg" className="card-img-top " alt="..." style={{ "width": "10rem" }} /></a>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/healthy.jpeg" className="card-img-top" alt="..." style={{ "width": "10rem" }} /></a>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  border-white text-center"  >
                            <a href="#"> <img src="images/fresh.jpeg" className="card-img-top" alt="..." style={{ "width": "10rem" }} /></a>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <b><h2 className='ourproduct container '>Our Gallery</h2></b>
            </div>
            <div>
                <h1 className=' container mt-5 '>Gallery of our Products</h1>
            </div>
            <div className="container">
                <div className="row g-5 mt-5">
                    <div className="col-md-4">
                        <div className="card border-white text-center" >
                            <a href="#"> <img src="images/Corn1.png" className="card-img-top corn" alt="..." style={{ "width": "12rem" }} /></a>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/Corn2.png" className="card-img-top corn" alt="..." style={{ "width": "12rem" }} /></a>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-white text-center" >
                            <a href="#"> <img src="images/Corn3.png" className="card-img-top corn" alt="..." style={{ "width": "12rem" }} /></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 gallarybtn">
                <Link type="button" className="btn bg-transparent border border-success p-3 " to='/Gallery'>See Gallery</Link>
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
                            <a href="#"> <img src="images/ECGC 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-white text-center"  >
                            <a href="#"> <img src="images/FSSAI 1.png" className="card-img-top" alt="..." style={{ "width": "12rem" }} /></a>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Homepagesub