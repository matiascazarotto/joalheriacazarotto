import React from 'react';
import styled from 'styled-components';

// Estilos da seção "Nossa Loja Física"
const StoreSection = styled.section`
  padding: 60px 20px;
  background-color: #101010;
  color: #f4f4f4;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #F1C40F;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
`;

const StoreImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  margin-top: 20px;
  font-weight: bold;
`;

const NossaLojaFisica = () => {
  return (
    <StoreSection>
      <SectionTitle>Nossa Loja Física</SectionTitle>
      <StoreImage src="url-da-imagem-da-loja.jpg" alt="Loja Física" />
      <p>Estamos localizados em</p>
      <Address>
        Avenida do Comércio, 540 - Centro
        <br />
        Rodeio Bonito - RS
      </Address>
    </StoreSection>
  );
};

export default NossaLojaFisica;
