'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Cursor style={{ top: `${position.y}px`, left: `${position.x}px` }} />;
};

export default CustomCursor;
