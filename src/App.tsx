
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Commancompo/Navbar';
import ABOUT from './Component/About';
import Gallery from './Component/Gallery';
import Home from './Component/Home';
import INQUIRY from './Component/Inquiry';

import Win_international_Trade from './Component/win_international_Trade';
import './App.css';
import Navbarmain from "./Commancompo/Navbarmain";
import Get_in_touch from "./Component/Get_in_touch";
import Cereals from "./Component/cereals";
import Fruit_and_veg from "./Component/Fruit_and_vegetable";
import Processed_food from "./Component/processed_food";
import Spices from "./Component/Spices";
import Footer from "./Component/Footer";
import Product_Details from "./Component/Product_Details";

export interface IApp { }

 const App:React.FunctionComponent<IApp> =(props)=> {
  return (
    <>
      <BrowserRouter>
        <div style={{ "width": "100%" }}>
          <Navbar />
          <Navbarmain />
        </div>

        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/About" element={<ABOUT />} />
          <Route path="/Gallery" element={<Gallery />} />
         
          <Route path="/inquiry" element={<INQUIRY />} />
          <Route path="/win_international_Trade" element={<Win_international_Trade />} />
          <Route path="/Get_in_touch" element={<Get_in_touch />} />
          <Route path="/Cereals" element={<Cereals />} />
          <Route path="/Fruit_and_veg" element={<Fruit_and_veg />} />
          <Route path="/Processed_food" element={<Processed_food />} />
          <Route path="/Spices" element={<Spices />} />
          <Route path="/blog/:id" element={<Product_Details />} />



        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
