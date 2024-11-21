import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Root = styled('div')({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)({
  background: 'rgba(255, 222, 89, 0.8)',
  boxShadow: 'none',
  backdropFilter: 'blur(3px)', 
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0
});

const Title = styled(Typography)({
  flexGrow: 1,
  color: '#000000',  
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  letterSpacing: '0.1rem',
  '@media (min-width: 600px)': {
    fontSize: '24px', 
  },
  '@media (max-width: 600px)': {
    textAlign: 'center', 
  },
});

const StyledButton = styled(Button)({
  color: '#000000', 
  fontFamily: 'Montserrat, sans-serif',
  marginLeft: '15px',
  '@media (max-width: 600px)': {
    marginLeft: '2px',
    padding: '0',
    fontSize: '10px', 
  },
});

const Header = ({ scrollToHome, scrollToAbout, scrollToContact }) => {
  return (
    <Root>
      <StyledAppBar>
        <Toolbar>
          <Title onClick={scrollToHome}>
            CAZAROTTO JOALHERIA
          </Title>
          <StyledButton onClick={scrollToContact}>Contato</StyledButton>
          <StyledButton onClick={scrollToAbout}>Sobre</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Root>
  );
};

export default Header;
