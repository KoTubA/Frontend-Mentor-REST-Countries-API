import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colorElements};
`;
