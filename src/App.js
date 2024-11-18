import React, { useRef } from 'react';
import Header from './components/Header';
import FullScreenBackground from './components/FullScreenBackground';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';
import NossaLojaFisica from './components/NossaLojaFisica';
import MercadoShopsSection from './components/MercadoShops';

function App() {
  // Referências para as seções
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Funções para rolagem suave
  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Componentes com forwardRef para passar as referências
  const ProductsScroll = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Products />
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
        scrollToProducts={scrollToProducts} 
        scrollToAbout={scrollToAbout} 
        scrollToContact={scrollToContact} 
      />
      <FullScreenBackground />
      <AboutScroll ref={aboutRef} />
      <ProductsScroll ref={productsRef} />
      <NossaLojaFisica ref={aboutRef} />
      <ContactScroll ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
