import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorText};
  width: 200px;
`;
