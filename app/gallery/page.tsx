'use client';

import Header from '@/components/common/Header';
import IconButton from '@/styles/ui/iconButton';
import PagePadding from '@/styles/ui/pagePadding';
import React from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Gallery = () => {
  return (
    <PagePadding>
      <Header />
      <div className='w-full h-full flex items-center justify-center gap-4'>
        <span className='text-xl'>THE WORKS OF THE MONTH</span>
        <IconButton icon={<MdOutlineArrowDropDown size={20} />} />
      </div>
    </PagePadding>
  );
};

export default Gallery;
