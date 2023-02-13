import React, { useState } from 'react'
import Captcha from '../Subcomponent/Capcha'


// interface FormData {
//   name: string;
//   email: string;
//   number: number;
//   subject:string;
//   description:string;
// }

export interface IGet_in_touch { }

const Get_in_touch: React.FunctionComponent<IGet_in_touch> = (props) => {
  
  // const [formData, setFormData] = useState<FormData>({ name: '', email: '',number: ,subject:'', description:'' });
  

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log(formData);
  // };

  return (
    <>
      <div className='bggetintouch img-fluid'>
        <div className='abouttext text-white'>
          <h2 className='Headabouttext'>Get In Touch</h2>
        </div>

      </div>

      <div>
        <b><h2 className='ourproduct container '>Contact Info</h2></b>
      </div>
      <div>
        <h1 className=' container mt-5 '>Get In Touch</h1>
      </div>
      <div className=' container mt-5'>
        <div className='col-md-6'>
          <div className='d-flex g-5'>
          <i className="bi bi-geo-alt-fill text-success"></i>
            <h5>We Are Here</h5>
          </div>

          <p>Near Jain Temple, At PO: Vasada,<br />
            District: Navsari - 396580</p>


          <div className='d-flex g-5'>
          <i className="bi bi-geo-alt-fill text-success"></i>
            <h5>Office Address</h5>
          </div>
          <p>Empire Business Hub, B-1313, Nr. Shukan Mall,
            Science City Road, Sola, Ahmedabad - 380060</p>


          <div className='d-flex g-5  '>
          <i className="bi bi-telephone-fill text-success"></i>
            <h5>Phone Us</h5>
          </div>
          <p>+91 99981 98011,<br /> +91 74339 55222</p>


          <div className='d-flex g-5'>
            <i className="bi bi-envelope-fill text-success"></i>
            <h5>Mail Us</h5>
          </div>
          <p>info@pratikagroexports.com<br />
            bhavin@pratikagroexports.com</p>
        </div>


      </div>


      <form >
        <div className='container formofgetintouch'>
          
               <div className='text-center'>
                 <p>SEND A <span className='text-success'>MESSAGE</span></p>
               </div>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'
            // name='name' onChange={handleInputChange} value={formData.name}
            />

            <div className="mb-3 mt-3">

              <input type="text" className="form-control"   placeholder='Email ID'
              // name='email'onChange={handleInputChange} value={formData.email}
              />
            </div>
            <div className="mb-3 mt-3">

              <input type="text" className="form-control"   placeholder='Contact Number'
              // name='number' onChange={handleInputChange} value={formData.number}
              />
            </div>
            <div className="mb-3 mt-3">

              <input type="text" className="form-control"   placeholder='Subject'style={{"color": "gray"}}
              // name='subject' onChange={handleInputChange} value={formData.subject}
              />
            </div>
           <div className="mb-3 mt-3">
           <textarea className="form-control" placeholder="Message"  style={{"height": "100px"}}
            // name='description'onChange={handleInputChange} value={formData.description}>
             >
            </textarea>
           </div>
           
           <div className='text-center'>
           <button type="submit" className="btn btn-primary" 
          //  onSubmit={handleSubmit}
           >Submit</button>
           </div>
  


            
           

          
        </div>

      </form>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8851832591436!2d73.75361561472572!3d20.013333027040332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebe5281a6c9d%3A0x33c273b9edb49d53!2sTechMET%20Solutions!5e0!3m2!1sen!2sin!4v1675753155622!5m2!1sen!2sin" width="100%" height="450" loading="lazy" >

      </iframe>
    </>
  )
}

export default Get_in_touch
