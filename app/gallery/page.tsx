'use client';

import Header from '@/components/common/Header';
import React from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import PagePadding from '@/styles/ui/pagePadding';
import * as S from './style';
import IconButton from '@/styles/ui/iconButton';

const Gallery = () => {
  const onClickDropdown = () => {};

  return (
    <PagePadding>
      <Header />
      <PagePadding>
        <S.CenteredContainer>
          <S.Title>THE WORKS OF THE MONTH</S.Title>
          <IconButton
            icon={<MdOutlineArrowDropDown size={20} />}
            onClickIcon={onClickDropdown}
          />
          <S.DropDownContainer />
        </S.CenteredContainer>
      </PagePadding>
    </PagePadding>
  );
};

export default Gallery;
