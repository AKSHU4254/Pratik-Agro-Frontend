import React from "react";
import Slider from "react-slick";

function RegisterMembers() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className=" container text-center mt-5 mb-4">
      <Slider {...settings} className="d-flex justify-content-center">
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/CDBI 1.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem" }}
            />
          </a>
          <div className="card-body"></div>
        </div>

        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/DGFT 1.png"
              className="card-img-top logoesimage img-fluid"
              alt="..."
              style={{ width: "12rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/ECGC 1.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/FSSAI 1.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/ISO 9001-2015.jpeg"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem", height: "8rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/ISO 22000-2018.jpeg"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem", height: "8rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/APEDA-Logo.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/Scipes Bord India.jpeg"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "16rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/FIEO.png"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "16rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/GCCI.jpg"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "14rem" }}
            />
          </a>
        </div>
        <div className="card border-white text-center">
          <a href="#">
            {" "}
            <img
              src="images/members/Aeida.jpg"
              className="card-img-top img-fluid"
              alt="..."
              style={{ width: "12rem", height: "5rem" }}
            />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default RegisterMembers;
