'use client';
import { ArrowBigLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 40px;
`;

const Elements = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.3s ease-in-out;
`;

const Header = () => {
  const { push } = useRouter();
  return (
    <HeaderContainer onClick={() => push('/')}>
      <Elements>
        <ArrowBigLeft />
        Go back to Home
      </Elements>
    </HeaderContainer>
  );
};

export default Header;
