import React from "react";
import { Link } from "react-router-dom";
import HomePageCarsole from "./HomePageCarsole";
import HomepageGallarySlider from "./HomepageGallarySlider";
import Homepagemiddletext from "./Homepagemiddletext";
import HomePageProduct from "./HomePageProduct";
import ScrollToTopButton from "./Scrolltop";
import RegisterMembers from "./RegisterMembers";

export interface IHomepagesub {}

const Homepagesub: React.FunctionComponent<IHomepagesub> = (props) => {
  return (
    <>
      <HomePageCarsole />

      <div>
        <b>
          <h2 className="ourproduct container ">Our Products</h2>
        </b>
        <div>

        <h1 className=" container mt-5 ">
          Awesome products created <br />
          by Pratik Agro Exports
        </h1>
        </div>
      </div>

      <HomePageProduct />

      <ScrollToTopButton />
      <div>
        <h1 className="homepagemiddletext container mb-5">
          <span style={{ color: "#9ACE4C" }} className="quality">
            Quality food is
          </span>{" "}
          <span style={{ color: "#CE4C5C" }}>the most </span>
          <br />
          <span style={{ color: "#351B7D" }}>Important thing</span>{" "}
          <span style={{ color: "#CE734C" }}>in our life</span>
        </h1>
      </div>

      <Homepagemiddletext />

      <div className="container">
        <div className="row g-5 logoesrow">
          <div className="col-md-3">
            <div className="card  border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/Bio.jpeg"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "10rem" }}
                />
              </a>
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/Natural.jpeg"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "10rem" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/healthy.jpeg"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "10rem" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/fresh.jpeg"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "10rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <HomepageGallarySlider />
      <div className="text-center mt-5 gallarybtn">
        <Link
          type="button"
          className="btn bg-button border border-success p-3 "
          to="/Gallery"
        >
          See Gallery
        </Link>
      </div>

      <div>
        <b>
          <h2 className="ourproduct container text-center ">Members</h2>
        </b>
      </div>
      <div>
        <b>
          <h1 className=" container text-center mt-5">Registered Member of</h1>
        </b>
      </div>
      <RegisterMembers/>
      {/* <div className="container  mb-5">
        <div className="row g-5 mt-4">
          <div className="col-md-3">
            <div className="card border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/CDBI 1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "12rem" }}
                />
              </a>
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/DGFT 1.png"
                  className="card-img-top logoesimage img-fluid"
                  alt="..."
                  style={{ width: "12rem" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/ECGC 1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "12rem" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white text-center">
              <a href="#">
                {" "}
                <img
                  src="images/FSSAI 1.png"
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ width: "12rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Homepagesub;
