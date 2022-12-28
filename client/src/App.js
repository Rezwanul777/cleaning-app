import Navbar from "./components/Navbar";
import {publicRoute} from "./routes/publicRoutes";
import {Route,Routes} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoute } from "./routes/privateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminRoute from "./authentication/AdminRoute";
import AddAdmin from "./pages/dashboard/AddAdmin";
import AddService from "./pages/dashboard/AddService";

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
    
      {/* <Route path='/services' element={
        <PrivateRoute>
         <Services/>
        </PrivateRoute>
    
      }
      /> */}
       <Route element={<PrivateRoute/>}>
       {privateRoute.map(({path,Component},index)=>(
          <Route key={index} path={path} element={<Component/>} />
       ))
       }
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='add-admin' element={<AddAdmin/>}/>
        <Route path='add-service' element={<AddService/>}/>
        </Route>
        </Route>
      </Routes>
     </Navbar>
  );
}

export default App;
