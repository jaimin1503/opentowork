import DevIT from "./components/D_IT/DevIT";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/DevIT" element={<DevIT/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
