import React from 'react';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  padding: 20px;
`;

const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Checkout = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CheckoutContainer>
      <h2>Оформление заказа</h2>
      {cart.map(item => (
        <CheckoutItem key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
        </CheckoutItem>
      ))}
      <h3>Итого: ${total}</h3>
      <button>Оплатить</button>
    </CheckoutContainer>
  );
};

export default Checkout;
