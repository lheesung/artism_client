import styled from 'styled-components';

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
}

export const Row = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || 0};
`;

export const Column = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || 0};
`;
