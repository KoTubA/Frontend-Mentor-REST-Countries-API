import styled from 'styled-components';
import { CountryFlag } from 'components/atoms/CountryFlag/CountryFlag';

export const CountryFlagDetails = styled(CountryFlag)`
  max-width: 560px;
  height: 230px;
  border-radius: 5px;
  display: flex;

  @media (min-width: 440px) {
    height: 280px;
  }

  @media (min-width: 500px) {
    height: 350px;
  }

  @media (min-width: 680px) {
    height: 400px;
  }

  @media (min-width: 960px) {
    flex: 1 0 500px;
  }
`;
