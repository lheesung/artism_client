import { cn } from '@/lib/utils';
import { theme } from '@/styles/base/theme';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  isColored?: boolean;
  onClickButton: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isColored = false,
  onClickButton,
}) => {
  return (
    <button
      onClick={onClickButton}
      className={cn(
        'border border-black px-5 py-3 hover:bg-[#FED119] ease-out duration-200 text-lg hover:scale-105',
        isColored && 'bg-[#FED119] hover:bg-[#FEBC2E] hover:scale-105'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
