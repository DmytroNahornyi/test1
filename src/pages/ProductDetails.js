import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const ProductContainer = styled.div`
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  // Здесь должна быть логика загрузки деталей продукта
  const product = {}; // Заглушка, замените на реальные данные

  return (
    <ProductContainer>
      <h2>{product.name}</h2>
      <ProductImage src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Цена: ${product.price}</p>
      <p>В наличии: {product.stock}</p>
      <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
        {product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
      </button>
    </ProductContainer>
  );
};

export default ProductDetails;
