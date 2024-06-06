import styled from 'styled-components';
import ChildrenType from '@/types/children.type';

const PagePaddingContainer = styled.div`
  margin: 0 auto;
  padding: 10px 20px;

  @media (min-width: 1024px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const PagePadding = ({ children }: ChildrenType) => {
  return <PagePaddingContainer>{children}</PagePaddingContainer>;
};

export default PagePadding;
