 import React from 'react'
import Homepagesub from '../Subcomponent/Homepagesub'



export interface IHome{}

const HOME:React.FunctionComponent<IHome> =(props)=>{
  return(
    <>
    <Homepagesub />
    
    </>
  )
}

export default HOME
