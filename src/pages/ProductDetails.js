import React, { useState, useEffect } from 'react';
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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        // Здесь должен быть реальный API-запрос
        // Например: const response = await fetch(`/api/products/${id}`);
        // const data = await response.json();

        // Имитация загрузки данных
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockProduct = {
          id: id,
          name: `Продукт ${id}`,
          description: 'Описание продукта',
          price: 19.99,
          stock: 5,
          image: 'https://via.placeholder.com/200',
        };

        setProduct(mockProduct);
      } catch (err) {
        setError('Ошибка при загрузке данных продукта');
        console.error('Ошибка:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Продукт не найден</div>;

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
