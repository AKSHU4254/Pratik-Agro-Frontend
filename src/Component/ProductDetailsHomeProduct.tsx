import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

export type post = {
  id: number;
  fname2: string;
  productimgpath: string;
};

export default function ProductDetailsHomeProduct() {
  const [post, setpost] = useState<string>("");
  const [postimg, setpostimg] = useState<string>("");
  const [name, setname] = useState<string>("");

  let { id } = useParams();
  console.log(id);

  const getData = async () => {
    const res7 = await fetch(
      `https://pratik-agro-backend.vercel.app/getHomeproduct/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data3 = await res7.json();

    if (res7.status === 422 || !data3) {
      console.log("error");
    } else {
      console.log(data3);
      setpost(data3);
      setpostimg(data3.productimgpath);
      setname(data3.fname2);
    }
  };
  
  const getUserData4 = async () => {
    const res4 = await axios.get("https://pratik-agro-backend.vercel.app/getGallaryProductimg", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res4.data.status === 401 || !res4.data) {
      console.log("error");
    } else {
      setpost(res4.data.getImage);
    }
  };
  
  useEffect(() => {
    getData();
    getUserData4();
  }, []);
  

  return (
    <>
      <div className="cerealbgproduct1 img-fluid">
        <div className="text-block3">
          <p className="text-white text-decoration-none">
            <h1>Product Details</h1>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 ">
          <div className="col-md-8">
            <div className="col-6">
              <div className="card border-0">
                <img
                  src={postimg}
                  alt="Cereals Product"
                  style={{ height: "auto", width: "50%", margin: "0 auto" }}
                />
                <h4
                  style={{ height: "auto", width: "50%", margin: "0 auto" }}
                  className="mt-5"
                >
                  {name}
                </h4>
                <div className="card-body  "></div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="searchBox">
              <input
                type="search"
                className="searchText"
                placeholder="Search..."
              />
              <a href="#" className="searchBtn">
                <i className="bi bi-search"></i>
              </a>
            </div>
            <div className=" col-lg-2 col-xl-2  mt-3">
              <h3>Category</h3>
              <p>
                <NavLink
                  to="/Cereals"
                  className=" text-dark text-decoration-none"
                >
                  Cereals
                </NavLink>
              </p>
              <p>
                <Link
                  to="/Fruit_and_veg"
                  className=" text-dark text-decoration-none"
                >
                  Fruits and vegetables{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="/Processed_food"
                  className=" text-dark text-decoration-none"
                >
                  Processed Food
                </Link>
              </p>
              <p>
                <Link to="/Spices" className=" text-dark text-decoration-none">
                  Spices
                </Link>
              </p>
            </div>

            <div className="mb-5 mt-5">
              <div className="Productdetailsimage img-fluid"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
