'use client';

import { theme } from '@/styles/base/theme';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  isColored?: boolean;
}

const Header = ({ isColored = false }: HeaderProps) => {
  const { push } = useRouter();
  return (
    <HeaderContainer isColored={isColored}>
      <HeaderElement onClick={() => push('/')}>홈</HeaderElement>
      <HeaderElement onClick={() => push('/gallery')}>갤러리</HeaderElement>
      <HeaderElement onClick={() => push('/profile')}>나</HeaderElement>
      <HeaderElement onClick={() => push('/login')}>로그인</HeaderElement>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  position: fixed;
  border-bottom: 1px solid;
  z-index: 9999;
  background-color: ${(props) => (props.isColored ? `transparent` : 'white')};
`;

const HeaderElement = styled.button`
  width: 33%;
  height: 100%;
  border-left: 1px solid ${theme.base.black};
  &:hover {
    background-color: ${theme.primary};
  }
  transition: 0.2s ease-in-out;
`;
