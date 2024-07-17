'use client';

import Image from 'next/image';
import Logo01 from '@/styles/logo/type01.png';
import Logo02 from '@/styles/logo/type02.png';
import Logo03 from '@/styles/logo/type03.png';
import Button from '@/styles/ui/button';
import { useRouter } from 'next/navigation';
import { getRandomInt } from '@/utils/number';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column } from '@/styles/ui/flex';
import Header from '@/components/common/Header';

const Container = styled(Column)<{ background: string }>`
  width: 100vw;
  height: 100vh;
  background: ${({ background }) =>
    `linear-gradient(to bottom, ${background}, #ffffff)`};
`;

const Content = styled(Column)`
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export default function Home() {
  const { push } = useRouter();
  const [randNumber, setRandNumber] = useState(0);
  const Logos = [Logo01, Logo02, Logo03];
  const colors = ['#FFCD00', '#E45556', '#5C9582'];

  useEffect(() => {
    setRandNumber(getRandomInt(0, 2));
  }, []);

  return (
    <>
      <Header isColored={true} />
      <Container background={colors[randNumber]}>
        <Content>
          <Image src={Logos[randNumber]} alt={'artism'} width={400} />
          <Title>아티즘에서 영감을 나누세요.</Title>
          <Button onClick={() => push('/gallery')} isColored>
            아티즘 입장하기
          </Button>
        </Content>
      </Container>
    </>
  );
}
