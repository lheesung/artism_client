'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
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
