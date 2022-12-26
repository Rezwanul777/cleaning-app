import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    
     <Navbar>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/services" element={<Services/>}/>
     </Routes>
      
     </Navbar>

    
  );
}

export default App;
