import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь должна быть логика аутентификации
    login({ email });
    navigate('/profile');
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit">Войти</Button>
    </LoginForm>
  );
};

export default Login;
