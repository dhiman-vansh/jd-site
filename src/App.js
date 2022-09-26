import './App.css';
import Home from './Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Gall from "./Gall.jsx"
import { Route, Routes } from 'react-router-dom';
import About from './About';
// ..
AOS.init();


function App() {
  return (
    <>
    {/* <Home /> */}
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/gall' element={<Gall />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  );
}

export default App;
