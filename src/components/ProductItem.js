import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Цена: ${product.price}</p>
      <p>В наличии: {product.stock}</p>
      <Link to={`/product/${product.id}`}>Подробнее</Link>
      <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
        {product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
      </button>
    </ProductCard>
  );
};

export default ProductItem;
