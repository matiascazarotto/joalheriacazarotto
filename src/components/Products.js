import React from 'react';

const Products = () => {
  return (
    <section id="products">
      <h2>Alguns de nossos produtos</h2>
      <div className="product-gallery">
        <div className="product-item">
          <img src="/images/anel1.jpg" alt="Anel de Ouro 18K" />
        </div>
        <div className="product-item">
          <img src="/images/anel1.jpg" alt="Brinco de Ouro 18K" />
        </div>
        <div className="product-item">
          <img src="/images/anel1.jpg" alt="Colar de Ouro com Pedras Preciosas" />
        </div>
      </div>
    </section>
  );
};

export default Products;
