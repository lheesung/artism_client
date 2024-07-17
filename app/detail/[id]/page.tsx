'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { workdata } from '@/constants/work.dummy';
import Header from '@/components/common/Header';
import PagePadding from '@/styles/ui/pagePadding';
import styled from 'styled-components';
import Button from '@/styles/ui/button';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 60px;
`;

const WorkImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

const WorkTitle = styled.h1`
  margin-bottom: 20px;
`;

const WorkDescription = styled.p`
  margin-bottom: 20px;
`;

const Top = styled.div`
  width: 100%;
`;

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const work = workdata.find((w) => w.id === Number(id));
  const { push } = useRouter();

  if (!work) {
    return (
      <PagePadding>
        <Header />
        <DetailContainer>
          <p>Something went wrong...</p>
        </DetailContainer>
      </PagePadding>
    );
  }

  return (
    <>
      <Header />
      <PagePadding>
        <DetailContainer>
          <Top>
            <Button onClick={() => push('/gallery')}>Go Back to Gallery</Button>
          </Top>
          <WorkImage src={work.img} alt={work.title} />
          <WorkTitle>{work.title}</WorkTitle>
          <WorkDescription>{work.description}</WorkDescription>
        </DetailContainer>
      </PagePadding>
    </>
  );
};

export default Detail;
