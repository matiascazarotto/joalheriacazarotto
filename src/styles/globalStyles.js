import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #101010; 
    color: #f4f4f4; 
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    color: #f4f4f4;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #bbb; 
  }

  a {
    text-decoration: none;
    color: #F1C40F; 
    transition: color 0.3s;
  }

  a:hover {
    color: #f4f4f4;
  }

  button {
    border: none;
    background-color: #F1C40F;
    color: #101010; 
    padding: 12px 30px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1rem;
  }

  section {
    padding: 80px 20px;
    text-align: center;
  }

  section h2 {
    margin-bottom: 40px;
    font-size: 2.5rem;
    color: #F1C40F;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .product-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 40px 0;
  }

  .product-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .product-item:hover {
    transform: scale(1.05);
  }

  .product-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  .product-item:hover img {
    opacity: 0.8;
  }

  .product-item p {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .social-links a {
    font-size: 1.5rem;
    color: #F1C40F;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #f4f4f4; 
  }
`;

export default GlobalStyles;
