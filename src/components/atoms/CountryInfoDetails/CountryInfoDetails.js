import styled from 'styled-components';
import { CountryInfo } from 'components/atoms/CountryInfo/CountryInfo';

export const CountryInfoDetails = styled(CountryInfo)`
  line-height: 32px;
  margin: 0;

  @media (min-width: 680px) {
    font-size: 16px;
  }
`;
