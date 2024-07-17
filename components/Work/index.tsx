import { theme } from '@/styles/base/theme';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface BoxProps {
  img?: string;
}

interface WorkProps {
  id: number;
  title: string;
  description: string;
  img: string;
}

const WorkBox = styled.div<BoxProps>`
  width: 210px;
  height: 297px;
  border: 1px solid;
  background-image: ${(props) => (props.img ? `url(${props.img})` : 'none')};
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in-out;
`;

const WorkDescription = styled.article`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: transparent;
  &:hover {
    color: ${theme.base.white};
    background-color: rgba(0, 0, 0, 0.4);
  }
  transition: 0.3s ease-in-out;
`;

const WorkTitle = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;

const Work = ({ id, title, description, img }: WorkProps) => {
  return (
    <Link href={`/detail/${id}`} passHref>
      <WorkBox img={img}>
        <WorkDescription>
          <WorkTitle>{title}</WorkTitle>
          <p className='break-keep'>{description}</p>
        </WorkDescription>
      </WorkBox>
    </Link>
  );
};

export default Work;
