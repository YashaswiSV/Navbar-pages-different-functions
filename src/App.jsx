

//================================================Ouest2===================================

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Placement from "./Pages/Placement";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";

const App = () => {
    return ( 
    <>
            <BrowserRouter>
                 <Routes>
                        <Route path="/" element={<Layout/>} >
                          <Route index element={<Home/>}/>
                          <Route path="/home" element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>
                          <Route path="/service" element={<Service/>}/>
                          <Route path="/placement" element={<Placement/>}/>
                          <Route path="/gallery" element={<Gallery/>}/>
                          <Route path="/contactus" element={<ContactUs/>}/>
  
  
  
  
  
                        </Route>
  
  
  
  
  
  
                 </Routes>
            
            
            
            
            </BrowserRouter>
    </> );
  }
   
  export default App;

