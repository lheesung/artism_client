import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.span`
  font-size: 1.25rem; /* Adjust font size as necessary */
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
