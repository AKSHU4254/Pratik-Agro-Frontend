import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Image {
  id: number;
  imgpath: string;
  fname:string;
  frontendpath:string
}

export default function HomePageCarsole() {
  const [imagesCarasole, setimagesCarasole] = useState<Image[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getUserData = async () => {
    const res2 = await axios.get("https://pratik-agro-backend.vercel.app/getImg", {
      headers: {
        "Content-Type": " application/json",
      },
    });
    if (res2.data.status === 401 || !res2.data) {
      console.log("error");
    } else {
      setimagesCarasole(res2.data.getImage.reverse());
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % imagesCarasole.length);
    }, 5000); // Update the activeIndex every 3 seconds
    return () => clearInterval(interval);
  }, [imagesCarasole.length]);

  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      {imagesCarasole.map((el,index)=>{
        return (
          <div key={el.id} className={index === activeIndex ? "carousel-item active" : "carousel-item"}>
            <img src={el.imgpath} className="d-block w-100" alt="..." />
            <div className="text-block2">
              <Link to={el.frontendpath} className='text-white text-decoration-none'><h1>{el.fname}<i className="bi bi-chevron-right"></i></h1></Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}
