import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

interface INavbarmain { }


const Navbarmain: React.FunctionComponent<INavbarmain> = (props) => {

    
  
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <div className="d-flex">
                        <img src="images/imagelogo2.png" alt="logo" className='navbar-brand img-fluid mt-2 img-fluid' style={{ "width": "2rem", "height": "2rem" }} />
                        <div className="vr"></div>
                    </div>

                    <img src="images/logo.png" alt="logo" className='navbar-brand img-fluid'  />


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2 ">
                            <li className="nav-item">
                                <NavLink className='nav-link' aria-current="page" to="/"

                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/About">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle "  data-bs-toggle="dropdown" aria-expanded="false" style={{"cursor":"pointer"}}>
                                    Product
                                </div>
                                <ul className="dropdown-menu bg-dark ">
                                    <li><NavLink className="dropdown-item" to="/Cereals">Cereals</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Fruit_and_veg">Fruits & Vegetables</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Processed_food">Processed Food</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Spices">Spices</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/Gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/inquiry">Inquiry</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/win_international">Win International</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink type="button" className="btn  border border-success navbutton " to="/Get_in_touch" >Get In Touch</NavLink>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbarmain
