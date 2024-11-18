import React, { forwardRef } from 'react';
import { styled } from '@mui/system';

const SectionContainer = styled('section')({
  display: 'flex',
  //backgroundImage: 'url(/images/wpp2.jpg)', 
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  textAlign: 'center',
});

const About = forwardRef((props, ref) => {
  return (
    <SectionContainer id="about" ref={ref}>
      <h2 >Sobre a Joalheria</h2>
      <p>Informações sobre a Joalheria Cazarotto...</p>
    </SectionContainer>
  );
});

export default About;
