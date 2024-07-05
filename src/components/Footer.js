// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(45deg, #8b0000, #006400, #191970);
  color: #ffff00;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled(Link)`
  color: #ffff00;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>Пупсіки та котики</h3>
          <p>© 2023 Все права защищены</p>
        </div>
        <FooterNav>
          <FooterLink to="/about">О нас</FooterLink>
          <FooterLink to="/contact">Контакты</FooterLink>
          <FooterLink to="/terms">Условия использования</FooterLink>
          <FooterLink to="/privacy">Политика конфиденциальности</FooterLink>
        </FooterNav>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
