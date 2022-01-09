import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 64px;
  align-items: center;
  color: ${({ theme }) => theme.colorText};

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1150px) {
    padding-top: 80px;
  }
`;

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 960px) {
    padding-left: 30px;
    width: auto;
    flex: 1 1 575px;
    max-width: 575px;
  }

  @media (min-width: 1400px) {
    padding-left: 0px;
  }
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0px;
`;

export const WrapperDetailsBorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0px;

  @media (min-width: 680px) {
    flex-direction: row;
  }

  @media (min-width: 960px) {
    flex-direction: column;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    padding-top: 68px;
  }
`;

export const WrapperBorderCountry = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperDetailsInfo = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;

  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
`;
