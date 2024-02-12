import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Properties from "./pages/Properties"
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Properties' element={<Properties/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        {/* once you do the router, you will do not need to do it again */}
        {/* <Navbar/> */}
      </Router>
    </div>
  );
}

export default App;


