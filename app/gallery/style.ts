import { font } from '@/styles/base/font';
import { Row } from '@/styles/ui/flex';
import styled from 'styled-components';

export const CenteredContainer = styled(Row)`
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 16px;
  position: relative;
`;

export const Title = styled.span`
  ${font['lg']}
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

export const DropDownContainer = styled.div`
  width: 120px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 50px;
`;
