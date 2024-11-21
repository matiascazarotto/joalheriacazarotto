import React, {forwardRef } from 'react';
import { styled } from '@mui/system';

const SectionContainer = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
});

const About = forwardRef((props, ref) => {
  return (
    <SectionContainer id="about" ref={ref}>
  <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify", marginBottom: "1.5rem", color: "#999" }}>
    Bem-vindo à <span style={{ color: "#F1C40F", fontWeight: "bold" }}>Cazarotto Joalheria</span>, onde você encontrará joias deslumbrantes, relógios de alta qualidade, óculos estilosos e presentes exclusivos. Nossa missão é proporcionar uma experiência única de elegância e sofisticação, ajudando você a celebrar momentos inesquecíveis.
  </p>
  <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify", marginBottom: "1.5rem", color: "#999" }}>
    Descubra nossa coleção cuidadosamente selecionada:
  </p>
  <ul style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#999", marginBottom: "1.5rem", marginLeft: "30px", listStyle: "none" }}>
  <li style={{ position: "relative", paddingLeft: "20px" }}>
    <span style={{ color: "#F1C40F", position: "absolute", left: "0" }}>•</span>
    Joias delicadas e sofisticadas para qualquer ocasião
  </li>
  <li style={{ position: "relative", paddingLeft: "20px" }}>
    <span style={{ color: "#F1C40F", position: "absolute", left: "0" }}>•</span>
    Relógios de alta qualidade e design excepcional
  </li>
  <li style={{ position: "relative", paddingLeft: "20px" }}>
    <span style={{ color: "#F1C40F", position: "absolute", left: "0" }}>•</span>
    Óculos de marca com estilo único
  </li>
  <li style={{ position: "relative", paddingLeft: "20px" }}>
    <span style={{ color: "#F1C40F", position: "absolute", left: "0" }}>•</span>
    Presentes personalizados para momentos especiais
  </li>
</ul>

  <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify", color: "#999", marginBottom: "1.5rem" }}>
    Conheça nossos produtos e experimente o brilho único da <span style={{ color: "#F1C40F", fontWeight: "bold" }}>Cazarotto Joalheria</span>
  </p>
  <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify", color: "#999" }}>
    Estamos aqui para ajudá-lo a encontrar o presente perfeito ou aquele detalhe especial que você merece.
  </p>
</SectionContainer>

  );
});

export default About;
