'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Waiter from '@/assets/waiter.jpg';
import { font } from '@/styles/base/font';
import { theme } from '@/styles/base/theme';
import Logo from '@/styles/logo/type01.png';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: linear-gradient(to bottom, #363636, #ffffff);
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid ${theme.base.black};
  position: absolute;
  right: 895px;
  top: 370px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #6e6e6e;
    color: white;
    top: 360px;
  }
`;

const Text = styled.p`
  ${font.md};
`;

const NotFound = () => {
  const { push } = useRouter();
  return (
    <Container>
      <Image src={Logo} alt={'logo'} width={300} onClick={() => push('/')} />
      <div className='text-center'>
        <Button onClick={() => push('/')}>BACK</Button>
        <Image src={Waiter} alt={'waiter'} width={300} />
        <Text>아티즘 소장입니다. 안타깝게도 아직 이 방은 점검 중입니다.</Text>
        <Text>제가 갤러리로 안내해드리죠.</Text>
      </div>
    </Container>
  );
};

export default NotFound;
