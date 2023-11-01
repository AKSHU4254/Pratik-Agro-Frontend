import axios from 'axios';
import { useEffect, useState } from "react";
import BackgroundGallary from '../Subcomponent/BackgroundGallary';


import { default as PostsOfGallery } from '../Subcomponent/Postofgallary';

export type post = {
  id: number,
  fname15: string,
  GallaryProductimg: string
 
  
 
}




type Igallary = {}

const Gallary = (props: Igallary) => {
  // const [post, setPost] = useState<post[]>([]);
   
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get<post[]>('http://localhost:4000/getGallaryProductimg');
      
  //     var data = Object.values(res.data.getImage);
     
  //     var x: post[] = [];
  //     data.forEach(element => {
  //       x.push({ "id": element.id, "fname15": element.fname15, "GallaryProductimg": element.GallaryProductimg });
  //     });
  //     setPost(x);
  //   }
  //   fetchPost();
  // }, [])
  const [post, setpost] = useState<post[]>([]);
  console.log(post)
  const getUserData4 = async () => {
    const res4 = await axios.get("https://pratik-agro-backend.vercel.app/getGallaryProductimg", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res4)
    if (res4.data.status === 401 || !res4.data) {
      console.log("error");
    } else {
      setpost(res4.data.getImage);
    }
  };

  useEffect(() => {
    getUserData4();
  }, []);


  return (
    <>
    
   
      <BackgroundGallary />
     
      <div >
      <h1 className='ourGallary container '>Our Gallery</h1>
      </div>
      <div className=''>
      
        <h1 className=' container '>Gallery of our Products</h1>
      </div>
      
      
      <div className='bgimgforhomegallary2'>
       <div className='container text-center'>
        <div className='row text-center'>
          <PostsOfGallery posts={post} />
        </div>
      </div>
      </div>
       
      
    </>
  )
}

export default Gallary
