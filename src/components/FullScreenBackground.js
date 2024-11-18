// import React from 'react';

// function FullScreenBackground() {
//   return (
//     <div style={{ 
//       height: '100vh', 
//       backgroundImage: 'url(/images/wpp1.jpg)', 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center', 
//       textAlign: 'center', 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//       flexDirection: 'column' 
//     }}>
//       <h1 style={{ fontSize: '4rem', fontWeight: 'lighter', color: '#F1C40F' }}>Cazarotto Joalheria</h1>
//       <p style={{ fontSize: '1.2rem', fontWeight: 'lighter', marginTop: '50px' }}>Joias de luxo para pessoas únicas</p>
//     </div>
//   );
// }

// export default FullScreenBackground;

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';

const BackgroundContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(/images/wpp1.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
});

const Text = styled('div')({
  position: 'relative',
  zIndex: 2,
  color: '#F1C40F',
  fontSize: '2rem',
  fontWeight: 'lighter',
  fontFamily: 'Archivo Black, sans-serif',
  textAlign: 'center',
  '@media (min-width: 600px)': {
    fontSize: '4rem',
  },
  '@media (min-width: 960px)': {
    fontSize: '7rem',
  },
});

function FullScreenBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textAnimation = useSpring({
    transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY / 1000})`,
    opacity: scrollY < 350 ? 1 : 0.8,
    config: { tension: 170, friction: 26 },
    textAlign: 'center',
  });

  return (
    <BackgroundContainer>
      <animated.div style={textAnimation}>
      <Text >Cazarotto Joalheria</Text>
      <p style={{ fontSize: '1rem', fontWeight: 'lighter', marginTop: '50px' }}>Joias de luxo para pessoas únicas</p>
      </animated.div>
    </BackgroundContainer>
  );
} 

export default FullScreenBackground;
