import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Image {
  _id: number;
  productimgpath: string;
  fname2: string;
}

export default function HomePageProduct() {
  const [imagesHomeProduct, setimagesHomeProduct] = useState<Image[]>([]);
  console.log(imagesHomeProduct);


  const getUserData2 = async () => {
    const res = await axios.get(
      "https://pratik-agro-backend.vercel.app/getHomeproductImg",
      {
        headers: {
          "Content-Type": " application/json",
        },
      }
    );
    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setimagesHomeProduct(res.data.getImage.reverse());
    }
  };
  useEffect(() => {
    getUserData2();
  }, []);
  
  return (
    <div className=" bgimgforhome  ">
      <div className="container">
        <div className="row g-5 mt-2">
          {imagesHomeProduct.map((el, index) => {
            return (
              <>
                <div className="col-md-4" key={el._id}>
                  <div className="card border-white text-center">
                    <a href="#">
                      {" "}
                      <img
                        src={el.productimgpath}
                        className="card-img-top homehoverimg"
                        alt="..."
                      />
                    </a>
                    <div className="card-body">
                      <Link
                        to={`/blog5/${el._id}`}
                        type="button"
                        className="btn btn-transparent bg-white"
                        onMouseEnter={(e) => {
                          const card = (e.target as HTMLElement).closest(
                            ".card"
                          );
                          if (card) {
                            card.classList.add("card-hover");
                          }
                        }}
                        onMouseLeave={(e) => {
                          const card = (e.target as HTMLElement).closest(
                            ".card"
                          );
                          if (card) {
                            card.classList.remove("card-hover");
                          }
                        }}
                      >
                        <span className="hometexetcard">{el.fname2}</span>{" "}
                        <i className="bi bi-chevron-right  arrowicon"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
