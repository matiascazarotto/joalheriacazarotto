import React, { useRef } from 'react';
import Header from './components/Header';
import FullScreenBackground from './components/FullScreenBackground';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';
import NossaLojaFisica from './components/NossaLojaFisica';

function App() {
  // Referências para as seções

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  // Funções para rolagem suave

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const FullScreenBackgroundScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <FullScreenBackground />
      </div>
    );
  });

  const AboutScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <About />
      </div>
    );
  });

  const ContactScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Contact />
      </div>
    );
  });

  return (
    <>
      <GlobalStyles />
      <Header 
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
        scrollToHome={scrollToHome}
      />
      <FullScreenBackgroundScroll ref={homeRef}/>
      <AboutScroll ref={aboutRef}/>
      <Products />
      <NossaLojaFisica />
      <ContactScroll ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
