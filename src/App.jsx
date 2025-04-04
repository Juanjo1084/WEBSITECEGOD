import { useState, useEffect } from 'react'
import Container from './components/container.jsx'
import LandingPage from './components/landingpage.jsx'
import Footer from './components/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/aboutus.jsx'
import Services from './components/services.jsx'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [home, setHome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHome(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer); // Limpieza del timeout
  }, []);

  return (
    <>
      {home ? (
        <LandingPage />
      ) : (
        <>
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
          <Footer />
          <a className='btn-whats' target='_blank' rel='noopener noreferrer' href="https://wa.me/573226006394"><i class="fa-brands fa-square-whatsapp"></i></a>
        </>
      )}
    </>
  );
}

export default App
