import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Capcha from '../Subcomponent/Capcha'
import InquryBg from '../Subcomponent/InquryBg'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export interface IInquery {}

const INQUERY: React.FunctionComponent<IInquery> = (props) => {

    const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Name:'',
    Company_Name:'',
    Email_Address:'',
    Contact_Number:'',
    Country:'',
    State:'',
    Product_Name:'',
    Description: '',
    date: '',
    
  });
  console.log(formData)
  
  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const Alert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Response has been Recorded',
      showConfirmButton: false,
      timer: 2500,
    }).then(() => navigate("/"));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_qhkjkjg';
    const templateId = 'template_4z9c21y';
    const publicKey = 'e5aqtGoM6iYb8OK_e';

    const templateParams = {
        from_name: formData.Name,
        from_company_name: formData.Company_Name,
        from_email: formData.Email_Address,
        from_contact: formData.Contact_Number,
        from_country: formData.Country,
        from_state: formData.State,
        product_name: formData.Product_Name,
        message: formData.Description,
      };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully!', response);
        
    }). catch((error) => {
        console.error('Error sending email:', error);
      });
};


  return (
    <>
    <InquryBg />
    <form onSubmit={handleSubmit}>
        <div>
          <h1 className='ourGallary container '>Inquiry</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mb-5'>
              <input
                type='text'
                name='Name'
                value={formData.Name}
                onChange={handleChange}
                id='Name'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='Name'
                autoComplete='off'
                required
              />
              <input
                type='text'
                name='Company_Name'
                value={formData.Company_Name}
                onChange={handleChange}
                id='CompanyName'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='Company Name'
                autoComplete='off'
                required
              />
              <input
                type='Email'
                name='Email_Address'
                value={formData.Email_Address}
                onChange={handleChange}
                id='EmailAddress'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='Email Address'
                autoComplete='off'
                required
              />
              <input
                type='Number'
                name='Contact_Number'
                value={formData.Contact_Number}
                onChange={handleChange}
                id='ContactNumber'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='Contact Number'
                autoComplete='off'
                required
                minLength={10}
              />
              <input
                type='text'
                name='Country'
                value={formData.Country}
                onChange={handleChange}
                id='Country'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='Country'
                autoComplete='off'
                required
              />
              <input
                type='text'
                name='State'
                value={formData.State}
                onChange={handleChange}
                id='State'
                className='form-control mb-5 mt-3 p-2'
                aria-describedby='passwordHelpBlock'
                placeholder='State'
                autoComplete='off'
                required
              />
            </div>
            <div className='col-md-6 mt-5 mb-5'>
              <input
                type='text'
                name='Product_Name'
                value={formData.Product_Name}
                onChange={handleChange}
                id='inputPassword5'
                className='form-control mb-5 mt-3'
                aria-describedby='passwordHelpBlock'
                placeholder='Product Name'
                autoComplete='off'
              />
              <textarea
                className='form-control'
                name='Description'
                value={formData.Description}
                onChange={handleChange}
                placeholder='Description'
                id='floatingTextarea2'
                style={{ height: '100px' }}
                autoComplete='off'
              ></textarea>

              <Capcha isVerified={isVerified} setIsVerified={setIsVerified}/>
              

              <button
              
  type='submit'
  className='btn btn-transparent border-success btn-lg btn-block mt-5 w-100 inqurysend'
  disabled={
    !formData.Name ||
    !formData.Company_Name ||
    !formData.Email_Address ||
    !formData.Contact_Number ||
    !formData.Country ||
    !formData.State ||
    !formData.Product_Name ||
    !formData.Description ||
    !isVerified
    
  }
  onClick={Alert}
>
  SEND
</button>
            </div>
          </div>
        </div>
      </form>
      </>
  )
}

export default INQUERY