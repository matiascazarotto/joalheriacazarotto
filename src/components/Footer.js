import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const FooterWrapper = styled('footer')({
  background: 'rgba(255, 222, 89, 0.8)', // Cor de fundo do footer
  boxShadow: 'none',
  backdropFilter: 'blur(3px)', // Efeito de desfoque no fundo
  padding: '20px 0',
  position: 'relative',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center', // Centraliza o conteúdo do footer
  color: '#000000',  // Cor do texto
});

const FooterText = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  textAlign: 'center',
  letterSpacing: '0.1rem',
  '@media (min-width: 600px)': {
    fontSize: '16px',
  },
  '@media (max-width: 600px)': {
    fontSize: '12px',
  },
  color: '#000000',
});

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        ©2024 Cazarotto Joalheria - Todos os direitos reservados
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
