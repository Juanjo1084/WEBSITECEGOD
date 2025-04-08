import { useEffect, useState } from "react";
import "../styles/landingpage.css";

function LandingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const texts = [
    "Bienvenido a CEGOD Ingeniería",
    "Soluciones óptimas para la Industria Eléctrica",
  ];

  useEffect(() => {
    let isMounted = true;
    setDisplayedText("");

    const text = texts[currentStep] || "";

    const animateText = async () => {
      for (let i = 0; i < text.length; i++) {
        if (!isMounted) return;
        await new Promise((resolve) => setTimeout(resolve, 40));
        if (isMounted) {
          setDisplayedText((prev) => prev + text[i]);
        }
      }

      if (currentStep === 0 && isMounted) {
        setTimeout(() => setCurrentStep(1), 500); // ← cambio aquí
      } else if (currentStep === 1 && isMounted) {
        setTimeout(() => setFadeOut(true), 300); // ← opcional si quieres mantener la salida a 4s
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [currentStep]);

  return (
    <div className={`landing-container ${fadeOut ? "fade-out" : ""}`}>
      {currentStep === 0 ? (
        <h1 className="landing-title">{displayedText}</h1>
      ) : (
        <p className="landing-subtitle">{displayedText}</p>
      )}
    </div>
  );
}

export default LandingPage;

