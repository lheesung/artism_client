import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isColored?: boolean;
  onClickButton?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.2s ease-out, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.isColored ? '#FEBC2E' : '#FED119')};
    transform: scale(1.05);
  }

  ${({ isColored }) => isColored && `background-color: #FED119;`}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  isColored = false,
  onClickButton,
  ...rest
}) => {
  return (
    <StyledButton onClick={onClickButton} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
