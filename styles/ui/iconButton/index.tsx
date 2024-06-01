import React, { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClickIcon?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClickIcon = () => {},
}) => {
  return (
    <div
      onClick={onClickIcon}
      className='flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.1)] rounded-full cursor-pointer'
    >
      {icon}
    </div>
  );
};

export default IconButton;
