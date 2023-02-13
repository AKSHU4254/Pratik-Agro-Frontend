import axios from 'axios';
import { useEffect, useState } from "react";
import { default as PostsOfGallery } from '../Subcomponent/Postofgallary';

export type post = {
  id: number,
  title: string,
  image: string
}




type ICereals = {}

const Gallary = (props: ICereals) => {
  const [post, setPost] = useState<post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get<post[]>('https://fakestoreapi.com/products');
      var data = Object.values(res.data);
      var x: post[] = [];
      data.forEach(element => {
        x.push({ "id": element.id, "title": element.title, "image": element.image });
      });
      setPost(x);
    }
    fetchPost();
  }, [])



  return (
    <>

      <div className='gallaryBgproduct img-fluid'>
        <div className='abouttext text-white'>
          <h2 className='Headabouttext'>Gallery</h2>
        </div>

      </div>
      <div>
        <b><h2 className='ourproduct container '>Our Gallery</h2></b>
      </div>
      <div>
        <h1 className=' container mt-5 '>Gallery of our Products</h1>
      </div>

      <div className='container text-center'>
        <div className='row mt-5 text-center'>
          <PostsOfGallery posts={post} />
        </div>
      </div>
    </>
  )
}

export default Gallary
