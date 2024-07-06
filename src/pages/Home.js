import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <HomeContainer>
      <h1>Вітаємо у нашому магазині!</h1>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100px', height: '100px' }}
            />
            <h3>{product.title}</h3>
            <p>Цена: ${product.price.toFixed(2)}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};

export default Home;
