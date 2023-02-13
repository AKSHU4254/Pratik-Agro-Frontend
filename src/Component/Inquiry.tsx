import React from 'react'
import { Link } from 'react-router-dom'
import Capcha from '../Subcomponent/Capcha'



export interface IInquiry { }

const INQUIRY: React.FunctionComponent<IInquiry> = (props) => {
  return (
    <>
      <div className='bginqury img-fluid'>
        <div className='abouttext text-white'>
          <h2 className='Headabouttext'>Inquiry</h2>
        </div>

      </div>

      <div className='mt-5'>
        <b><h2 className='ourproduct container '>Inquiry</h2></b>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mb-5'>
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Name' />
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Company Name' />
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Email Address' />
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Contact Number ' />
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Country ' />
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='State' />



          </div>
          <div className='col-md-6 mt-5 mb-5'>
            <input type="text" id="inputPassword5" className="form-control mb-5 mt-3" aria-describedby="passwordHelpBlock" placeholder='Product Name' />
            <textarea className="form-control" placeholder="Description" id="floatingTextarea2" style={{"height": "100px"}}></textarea>
              
            <Capcha />
           
            
            <button type="button" className="btn btn-transparent border-success btn-lg btn-block mt-5" >SEND</button>

          

          </div>
        </div>


      </div>

    </>
  )
}

export default INQUIRY