import React from 'react';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <CartContainer>
      <h2>Корзина</h2>
      {cart.map(item => (
        <CartItem key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
