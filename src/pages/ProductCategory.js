import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  padding: 20px;
`;

const ProductCategory = () => {
  const { category } = useParams();
  // Здесь должна быть логика загрузки продуктов по категории
  const products = []; // Заглушка, замените на реальные данные

  return (
    <CategoryContainer>
      <h2>{category}</h2>
      <ProductList products={products} />
    </CategoryContainer>
  );
};

export default ProductCategory;
