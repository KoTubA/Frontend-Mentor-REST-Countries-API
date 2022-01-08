import styled from 'styled-components';

export const NavWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colorElements};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 80px;

  @media (min-width: 680px) {
    padding: 0 24px;
  }

  @media (min-width: 960px) {
    padding: 0 48px;
  }

  @media (min-width: 1400px) {
    padding: 24px 80px;
  }
`;
