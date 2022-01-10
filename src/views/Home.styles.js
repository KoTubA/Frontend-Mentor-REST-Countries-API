import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colorBackground};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 80px);
`;
