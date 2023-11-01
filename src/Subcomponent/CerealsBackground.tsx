import React, { useState, useEffect } from "react";
import axios from "axios";

interface Image {
  id: number;
  cerealsBackgroundimg: string;
  fname4: string;
}

const CerealsBackground = () => {
  const [imagesAboutBg, setImagesAboutBg] = useState<Image[]>([]);
  console.log(imagesAboutBg)
  const getUserData4 = async () => {
    const res4 = await axios.get("https://pratik-agro-backend.vercel.app/getCerealsbgImg", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res4.data.status === 401 || !res4.data) {
      console.log("error");
    } else {
      setImagesAboutBg(res4.data.getImage.reverse());
    }
  };

  useEffect(() => {
    getUserData4();
  }, []);

  const backgroundImageStyle = imagesAboutBg.length > 0
    ? { backgroundImage: `url(${imagesAboutBg[0].cerealsBackgroundimg})` }
    : {};

  return (
    <div className="aboutbg img-fluid" style={backgroundImageStyle}>
     <div className="text-block3">
                <p className='text-white text-decoration-none'><h1>Cereals</h1></p>
              </div>
    </div>
  );
};

export default CerealsBackground;
