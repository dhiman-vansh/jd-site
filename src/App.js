import './App.css';
import Home from './Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <>
    <Home />
    </>
  );
}

export default App;
