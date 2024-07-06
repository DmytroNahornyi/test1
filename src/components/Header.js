import React from 'react';
import { Link, NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchQuery } from '../redux/actions/filterActions';

const HeaderContainer = styled.header`
  background: linear-gradient(45deg, #8b0000, #006400, #191970);
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
    border-radius: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(RouterNavLink)`
  color: #ffff00;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008000;
    transform: scale(1.1);
  }
`;

const CartButton = styled(NavLink)`
  background-color: #b22222;

  &:hover {
    background-color: #008000;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  margin-right: 1rem;
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const searchQuery = useSelector(state => state.filters.searchQuery);

  const handleLogout = () => {
    // Здесь должна быть логика выхода из системы
    navigate('/');
  };

  const handleSearch = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <HeaderContainer>
      <Logo to="/">I-buy.top</Logo>
      <SearchInput
        type="text"
        placeholder="Поиск товаров..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/category/electronics">Электроника</NavLink>
        <NavLink to="/category/clothing">Одежда</NavLink>
        <NavLink to="/category/books">Книги</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink as="button" onClick={handleLogout}>
              Выйти
            </NavLink>
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
