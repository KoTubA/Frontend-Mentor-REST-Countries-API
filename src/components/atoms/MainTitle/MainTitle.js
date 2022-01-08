import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colorText};
  margin: 0;
  padding: 0;

  @media (min-width: 680px) {
    font-size: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
  }
`;
