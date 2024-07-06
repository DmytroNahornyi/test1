import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <ProfileContainer>
      <h2>Профиль пользователя</h2>
      <p>Email: {user.email}</p>
      {/* Здесь можно добавить дополнительную информацию о пользователе */}
    </ProfileContainer>
  );
};

export default UserProfile;
