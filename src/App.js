import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Clients from './components/Clients/Clients';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Scrollup from './components/Scrollup/Scrollup'

function App() {
  return (
    <div>
      <Navbar/>
      <Scrollup/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<ContactUs/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/clients' element={<Clients/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
