import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(45deg, #8b0000, #006400, #191970);
  /* color: white; */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffff00;
  text-decoration: none;
  padding: 0.4rem 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008000;
    transform: scale(1.1);
    border-radius: 10px; /* Это свойство закругляет края */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #ffff00;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008000;
    transform: scale(1.1);
    border-radius: 10px; /* Это свойство закругляет края */
  }
`;

const CartButton = styled(NavLink)`
  background-color: #b22222;

  &:hover {
    background-color: #008000;
    border-radius: 10px; /* Это свойство закругляет края */
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const handleLogout = () => {
    // Здесь должна быть логика выхода из системы
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo to="http://localhost:3000/DmytroNahornyi/test1">I-buy.top</Logo>
      <Nav>
        <NavLink to="/category/electronics">Электроника</NavLink>
        <NavLink to="/category/clothing">Одежда</NavLink>
        <NavLink to="/category/books">Книги</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink onClick={handleLogout}>Выйти</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Войти</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </>
        )}
        <CartButton to="/checkout">Корзина ({cartItemsCount})</CartButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
