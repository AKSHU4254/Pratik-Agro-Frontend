import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
  id: number;
  gallaryimgpath: string;
}

const HomepageGallarySlider: React.FunctionComponent = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  const getUserData3 = async () => {
    const res3 = await axios.get(`https://pratik-agro-backend.vercel.app/getHomegallaryImg`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res3.data.status === 401 || !res3.data) {
      console.log('error');
    } else {
      setImages(res3.data.getImage.reverse());
    }
  };

  useEffect(() => {
    getUserData3();
  }, []);

  const NextArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <h1><i className="bi bi-arrow-right-circle-fill"></i></h1>
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <h1><i className="bi bi-arrow-left-circle-fill"></i></h1> 
      </div>
    );
  };
 
  // Define the breakpoints for the slider
  const settings: Settings = {
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (current: number, next: number) => setImageIndex(next),
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <>
      <div className="container bgimgforhomegallary">
        <div>
          <b>
            <h2 className="ourproduct container ">Our Gallery</h2>
          </b>
        </div>
        <div>
          <h1 className=" container mt-5 ">Gallery of our Products</h1>
        </div>
        
        
        <Slider {...settings}>
           {
             images.map((value,idx)=>{
                return(
                   
                    <div className="slidercard ">
                            <img src={value.gallaryimgpath} className='imgslidercard img-fluid'/>
                      </div>
                      
                   
                )
             })
           }
            </Slider>
            
    </div>
       
      

      
    </>
  );
};

export default HomepageGallarySlider;