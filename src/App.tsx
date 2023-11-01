
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Commancompo/Navbar';
import ABOUT from './Component/About';
import Gallery from './Component/Gallery';
import Home from './Component/Home';
import INQUIRY from './Component/Inquiry';

import './App.css';
import Navbarmain from "./Commancompo/Navbarmain";
import Cereals from "./Component/cereals";
import Footer from "./Component/Footer";
import Fruit_and_veg from "./Component/Fruit_and_vegetable";
import Get_in_touch from "./Component/Get_in_touch";
import Processed_food from "./Component/processed_food";
import Product_Details from "./Component/Product_DetailsCereals";
import Spices from "./Component/Spices";
import Win_international_Trade from './Component/win_international_Trade';
import FruitAndVegProductDetails from "./Component/FruitAndVegProductDetails";
import ProceesedFoodProductDetails from "./Component/ProceesedFoodProductDetails";
import SpiceProductDetails from "./Component/SpiceProductDetails";
import ProductDetailsHomeProduct from "./Component/ProductDetailsHomeProduct";
import NewFooter from "./Commancompo/NewFooter";
import INQUERY from "./Component/Inquery";


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
         
          {/* <Route path="/inquiry" element={<INQUIRY />} /> */}
          <Route path="/inquiry" element={<INQUERY/>}/>
          <Route path="/win_international" element={<Win_international_Trade />} />
          <Route path="/Get_in_touch" element={<Get_in_touch />} />
          <Route path="/Cereals" element={<Cereals />} />
          <Route path="/Fruit_and_veg" element={<Fruit_and_veg />} />
          <Route path="/Processed_food" element={<Processed_food />} />
          <Route path="/Spices" element={<Spices />} />
          <Route path="/blog/:id" element={<Product_Details />} />
          <Route path="/blog2/:id" element={<FruitAndVegProductDetails />} />
          <Route path="/blog3/:id" element={<ProceesedFoodProductDetails/>} />
          <Route path="/blog4/:id" element={<SpiceProductDetails/>} />
          <Route path="/blog5/:id" element={<ProductDetailsHomeProduct/>} />
         
        </Routes>
        {/* <Footer/> */}
       <NewFooter />
       
      </BrowserRouter>

    </>
  )
}

export default App
