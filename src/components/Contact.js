import React, { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, IconButton, TextField, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

// ---------- Estilos -----------
const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#100705 url(/imgs/background.jpg) center/cover',
  color: '#fff',
  padding: '50px 20px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '100vh',
  width: '100%', // Garante largura total
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: '40px 250px',
  },
}));


const VerticalTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginRight: '50px',
  },
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  fontFamily: 'Archivo Black, sans-serif',
  fontSize: '26px',
  color: '#fff',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: '50%',
    left: 'calc(50% + 100px)',
    width: '5px',
    height: '200px',
    backgroundColor: '#fff',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
}));

const ContactInfoContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
});

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  flexWrap: 'wrap',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  textDecoration: 'none',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '& img': {
    width: '50px',
    height: '50px',
    [theme.breakpoints.up('md')]: {
      width: '75px',
      height: '75px',
    },
  },
}));

const SocialText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  marginTop: '10px',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
  },
}));

const ContactForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
  maxWidth: '600px', // Define um limite de largura
  [theme.breakpoints.up('md')]: {
    width: '100%', // Garante largura total em telas maiores
  },
}));
const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '15px',
  width: '100%', // Garante que ocupe toda a largura do contêiner
  '& .MuiInputBase-root': {
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#F1C40F',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F1C40F',
    },
    '&:hover fieldset': {
      borderColor: '#F1C40F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F1C40F',
    },
  },
}));

const CustomButton = styled(Button)({
  backgroundColor: '#F1C40F',
  color: '#100705',
  width: '100%',
  '&:hover': {
    backgroundColor: '#F1C000',
  },
});

// ---------- Componente principal -----------
function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setFormSubmitted(true);
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Previne o recarregamento da página
    
    // Coletar os dados do formulário
    const formData = new FormData(event.target);
    
    // Enviar os dados via POST para o FormSubmit
    fetch('https://formsubmit.co/matias.cazarotto@hotmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Redirecionar para a página de confirmação
          window.location.href = '/?success=true';
        } else {
          // Tratar erro caso o envio falhe
          console.error('Erro ao enviar o formulário.');
        }
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  };
  

  return (
    <SectionContainer>
      <VerticalTextContainer>
        <VerticalText variant="h2">CONTATO</VerticalText>
        <VerticalLine />
      </VerticalTextContainer>

      <ContactInfoContainer>
        <SocialIconsContainer>
          <CustomIconButton href="tel:+5555996030935" aria-label="WhatsApp">
            <img src="images/logo-whatsapp.png" alt="WhatsApp" />
            <SocialText>WHATSAPP</SocialText>
            <SocialText>(55) 99603-0935</SocialText>
          </CustomIconButton>
          <CustomIconButton href="mailto:contato@cazarottojoalheria.com" aria-label="E-mail">
            <img src="images/logo-email.png" alt="E-mail" />
            <SocialText>E-MAIL</SocialText>
            <SocialText>contato@cazarottojoalheria.com</SocialText>
          </CustomIconButton>
          <CustomIconButton href="https://www.instagram.com/cazarotto.joalheria/" target="_blank" aria-label="Instagram">
            <img src="images/logo-instagram.png" alt="Instagram" />
            <SocialText>INSTAGRAM</SocialText>
            <SocialText>@cazarotto.joalheria</SocialText>
          </CustomIconButton>
        </SocialIconsContainer>

        {formSubmitted ? (
          
          <Typography ref={messageRef} variant="h5" color="#F1C40F" sx={{ padding: '30px' }}>
            Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
          </Typography>
        ) : (
          <ContactForm>
            <form 
            //onSubmit={handleFormSubmit} 
            action="https://formsubmit.co/matias.cazarotto@hotmail.com" 
            method="POST"
            //onSubmit={() => setFormSubmitted(true)}
            >
              <CustomTextField
                label="Nome"
                variant="outlined"
                name="name"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon style={{ color: '#F1C40F' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                label="E-mail"
                variant="outlined"
                type="email"
                name="email"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: '#F1C40F' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                label="Mensagem"
                variant="outlined"
                multiline
                rows={3}
                name="message"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon style={{ color: '#F1C40F' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomButton type="submit" variant="contained">
                Enviar Mensagem
              </CustomButton>
            </form>
        </ContactForm>
        )}
      </ContactInfoContainer>
    </SectionContainer>
  );
}

export default Contact;
