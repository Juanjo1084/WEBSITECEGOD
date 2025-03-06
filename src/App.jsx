import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Container from './components/container.jsx'
import LandingPage from './components/landingpage.jsx'
import Footer from './components/footer.jsx'
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
          <a className='btn-whats' href="#"><i class="fa-brands fa-square-whatsapp"></i></a>
          <Footer />

        </>
      )}
    </>
  );
}

export default App
