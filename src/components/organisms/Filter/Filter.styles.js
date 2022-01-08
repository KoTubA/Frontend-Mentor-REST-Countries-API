import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px;

  @media (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
  }

  @media (min-width: 960px) {
    padding: 24px 48px;
  }

  @media (min-width: 1400px) {
    padding: 24px 80px;
  }
`;
