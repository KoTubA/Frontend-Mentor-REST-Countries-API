import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 32px 16px;
  width: 100%;
  max-width: 1440px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  row-gap: 40px;

  a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, minmax(auto, 264px));
    grid-gap: 40px;
    padding: 56px;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(auto, 264px));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(auto, 264px));
    grid-gap: 75px;
    padding: 48px 80px;
  }
`;
