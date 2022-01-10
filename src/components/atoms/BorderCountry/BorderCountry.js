import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BorderCountry = styled(Link)`
  min-width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  border-radius: 2px;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 10px;
  margin: 10px 10px 0px 0px;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.boxShadowBorderCountry};

  @media (min-width: 680px) {
    font-size: 14px;
    line-height: 20px;
    padding: 4px 10px;
    margin: 0px 10px 10px 0px;
  }

  @media (min-width: 960px) {
    font-size: 14px;
    line-height: 20px;
    padding: 4px 10px;
    margin: 10px 10px 0px 0px;
  }

  @media (min-width: 1150px) {
    margin: 0px 10px 10px 0px;
  }
`;
