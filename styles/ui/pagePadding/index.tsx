import ChildrenType from '@/types/children.type';
import React from 'react';

const PagePadding = ({ children }: ChildrenType) => {
  return (
    <div className='bg-red-500 mx-auto px-20 py-20 lg:px-[100px]'>
      {children}
    </div>
  );
};

export default PagePadding;
