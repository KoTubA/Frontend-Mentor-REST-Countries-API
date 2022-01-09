import styled from 'styled-components';
import { CountryFlag } from 'components/atoms/CountryFlag/CountryFlag';

export const CountryFlagDetails = styled(CountryFlag)`
  max-width: 560px;
  height: auto;
  border-radius: 5px;
  display: flex;
  overflow: hidden;

  @media (min-width: 960px) {
    flex: 1 0 500px;
  }
`;
