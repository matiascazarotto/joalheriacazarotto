import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilos da seção MercadoShops
const MercadoShopsSection = styled.section`
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

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  width: calc(33.33% - 20px);
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #e67e22;
  margin-bottom: 15px;
`;

const ViewProductLink = styled.a`
  color: #3498db;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MercadoShops = () => {
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos da API do Mercado Livre
  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
      const productData = await response.json();
      return productData;
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
      return null;
    }
  };

  // Função para buscar os IDs dos produtos do usuário e os detalhes
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://api.mercadolibre.com/users/120406455/items/search?status=active', {
          method: 'GET',
          headers: {
            'Authorization': ''
          }
        });

      const data = await response.json();
      const productIds = data.results || [];

      // Buscar os detalhes de cada produto usando seus IDs
      const productDetails = await Promise.all(
        productIds.map(productId => fetchProductDetails(productId))
      );

      // Filtrar produtos válidos e salvar no estado
      setProducts(productDetails.filter(product => product !== null));
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  };

  // Carregar produtos ao montar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MercadoShopsSection>
      <SectionTitle>Produtos do MercadoShops</SectionTitle>
      <ProductsContainer>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.thumbnail} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              <ViewProductLink href={product.permalink} target="_blank">
                Ver no Mercado Livre
              </ViewProductLink>
            </ProductCard>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </ProductsContainer>
    </MercadoShopsSection>
  );
};

export default MercadoShops;
