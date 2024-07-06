import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterForm = styled.form`
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь должна быть логика регистрации
    navigate('/login');
  };

  return (
    <RegisterForm onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
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
      <Input
        type="password"
        placeholder="Подтвердите пароль"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </RegisterForm>
  );
};

export default Register;
