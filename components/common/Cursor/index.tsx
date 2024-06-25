'use client';

import { font } from '@/styles/base/font';
import { Row } from '@/styles/ui/flex';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Cursor = styled.div<{ isOverButton: boolean }>`
  width: 30px;
  height: 30px;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 60px;
  mix-blend-mode: difference;
  border-radius: 50%;
  will-change: transform;
  z-index: 9999;
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
  ${({ isOverButton }) =>
    isOverButton &&
    css`
      width: 80px;
      height: 40px;
      border-radius: 50px;
      ${font.xl}
    `}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverButton, setIsOverButton] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (element && element.tagName === 'BUTTON') {
        setIsOverButton(true);
      } else {
        setIsOverButton(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Cursor
      isOverButton={isOverButton}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {isOverButton && 'view'}
    </Cursor>
  );
};

export default CustomCursor;
