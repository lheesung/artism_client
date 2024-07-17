import { font } from '@/styles/base/font';
import { theme } from '@/styles/base/theme';
import { Row } from '@/styles/ui/flex';
import styled from 'styled-components';

interface BoxProps {
  img?: string;
}

export const CenteredContainer = styled(Row)`
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 16px;
  position: relative;
  margin-top: 80px;
`;

export const Title = styled.span`
  ${font['lg']}
  margin-bottom: 60px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
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

export const Work = styled.div<BoxProps>`
  width: 210px;
  height: 297px;
  border: 1px solid;
  background-image: ${(props) => (props.img ? `url(${props.img})` : 'none')};
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in-out;
`;

export const BoxesContainer = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
`;

export const WorkDescription = styled.article`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: transparent;
  &:hover {
    color: ${theme.base.white};
    background-color: rgba(0, 0, 0, 0.4);
  }
  transition: 0.3s ease-in-out;
`;

export const WorkTitle = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;
