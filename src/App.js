import Navbar from "./components/Navbar";
import {publicRoute} from "./routes/publicRoutes";
import {Route,Routes} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
     <Navbar>
     <Routes>
      {/* <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/services" element={<Services/>}/> */}
      {
        publicRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} element={<Component/>} />
        ))
      }
     </Routes>
      
     </Navbar>
  );
}

export default App;
