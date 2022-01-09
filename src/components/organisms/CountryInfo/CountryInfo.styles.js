import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 28px;
  width: 100%;
  max-width: 1440px;

  @media (min-width: 960px) {
    padding: 40px 48px;
  }

  @media (min-width: 1400px) {
    padding: 80px;
  }
`;
