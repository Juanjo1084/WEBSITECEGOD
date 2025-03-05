import { useState, useEffect } from 'react'
import Header from './components/Header'
import Container from './components/container'
import LandingPage from './components/landingpage'
import Footer from './components/footer'
import './App.css'

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
          <Container />
          <Footer />
          <div className="btn-whats">
            <a><img src="/src/components/images/whatsapp-icon-free-png.webp" alt="WhatsApp"/></a>
          </div>
        </>
      )}
    </>
  );
}

export default App
