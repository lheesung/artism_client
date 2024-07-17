'use client';

import Header from '@/components/common/Header';
import React from 'react';
import PagePadding from '@/styles/ui/pagePadding';
import * as S from './style';
import Work from '@/components/Work';
import { workdata } from '@/constants/work.dummy';

const Gallery = () => {
  return (
    <>
      <Header />
      <PagePadding>
        <S.CenteredContainer>
          <S.Title>THE WORKS OF THE MONTH</S.Title>
        </S.CenteredContainer>
        <S.BoxesContainer>
          {workdata.map((work) => (
            <Work
              key={work.id}
              title={work.title}
              id={work.id}
              description={work.description}
              img={work.img}
            />
          ))}
        </S.BoxesContainer>
      </PagePadding>
    </>
  );
};

export default Gallery;
