import './styles/App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from './components/container.jsx'
import LandingPage from './components/landingpage.jsx'
import Footer from './components/footer.jsx'
import Services from './components/services.jsx'
import Header from './components/Header.jsx'
import Consultation from './components/consultation.jsx'

function App() {
const [home, setHome] = useState(true);

//time control landing page
useEffect(() => {
  const timer = setTimeout(() => {
    setHome(false);
  }, 5000); 

  return () => clearTimeout(timer); 
}, []);

  return (
    <>
      {home ? (
        <LandingPage />
      ) : (
        <>
        <Header />
        <Routes>
          <Route path="/aboutus" element={<Container />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
          <Footer />
          <a className='btn-whats' target='_blank' rel='noopener noreferrer' href="https://wa.me/573226006394"><i class="fa-brands fa-square-whatsapp"></i></a>
        </>
      )}
    </>
  );
}

export default App
