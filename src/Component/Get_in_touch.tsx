import React, { useState } from 'react'
import Captcha from '../Subcomponent/Capcha'
import GetintouchBackground from '../Subcomponent/GetintouchBackground'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

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
  const [formData, setFormData] = useState({
    
    Name:'',
    Email:'',
    Subject:'',
    Contact_Number :'' ,
    Message:'',
  });

  const navigate = useNavigate()

  const Alert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Response has been Recorded',
      showConfirmButton: false,
      timer: 2500,
    }).then(() => navigate("/"));
  };

  const handleInputChange = (event:any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event :any) => {
    event.preventDefault()
    fetch('https://pratik-agro-backend.vercel.app/AddGetinTouchmsgDetails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <>
      {/* <div className='bggetintouch img-fluid'>
      <div className="text-block3">
                <p className='text-white text-decoration-none'><h1>Get in Touch</h1></p>
      </div>

      </div> */}
       <GetintouchBackground />
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


      <form onSubmit={handleSubmit}>
      <div className='container formofgetintouch'>
        <div className='text-center'>
          <p>SEND A <span className='message'>MESSAGE</span></p>
        </div>

        <input
          type="text"
          className="form-control"
          id="name"
          name="Name"
          placeholder='Name'
          onChange={handleInputChange}
          value={formData.Name}
          required
          autoComplete='off'
        />

        <div className="mb-3 mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="Email"
            placeholder='Email ID'
            onChange={handleInputChange}
            value={formData.Email}
            required
            autoComplete='off'
          />
        </div>

        <div className="mb-3 mt-3">
          <input
            type="number"
            className="form-control"
            id="number"
            name="Contact_Number"
            placeholder='Contact Number'
            onChange={handleInputChange}
            value={formData.Contact_Number}
            required
            autoComplete='off'
          />
        </div>

        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="subject"
            name="Subject"
            placeholder='Subject'
            onChange={handleInputChange}
            value={formData.Subject}
            required
            autoComplete='off'
          />
        </div>

        <div className="mb-3 mt-3">
          <textarea
            className="form-control"
            id="description"
            name="Message"
            placeholder="Message"
            style={{ "height": "100px" }}
            onChange={handleInputChange}
            value={formData.Message}
            required
            autoComplete='off'
          />
        </div>

        <div className='text-center'>
          <button type="submit" className="btn btn-primary" disabled={
    !formData.Name ||
    !formData.Contact_Number ||
    !formData.Email||
    !formData.Message ||
    !formData.Subject 
    
    }
    onClick={Alert}>Submit</button>
        </div>
      </div>
    </form>


      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8851832591436!2d73.75361561472572!3d20.013333027040332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebe5281a6c9d%3A0x33c273b9edb49d53!2sTechMET%20Solutions!5e0!3m2!1sen!2sin!4v1675753155622!5m2!1sen!2sin" width="100%" height="450" loading="lazy" >

      </iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d29365.235483849614!2d72.5135355!3d23.0731273!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e9d2d6679d943%3A0x96c3294dab045588!2sPRATIK%20AGRO%20EXPORTS%20B%201313%2C%20EMPIRE%20BUSINESS%20HUB%20Science%20City%20Rd%2C%20opp.%20SHAKTI%20FARM%2C%20Sola%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0731273!2d72.5135355!5e0!3m2!1sen!2sin!4v1679138793008!5m2!1sen!2sin"  width="100%" height="450" loading="lazy" ></iframe>
    </>
  )
}

export default Get_in_touch
