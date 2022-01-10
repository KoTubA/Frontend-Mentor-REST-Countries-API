import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  border-radius: 2px;
  font-size: 14px;
  padding: 6px 0px;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.boxShadowBack};

  span {
    margin-left: 8px;
    line-height: 20px;
  }

  svg path {
    fill: ${({ theme }) => theme.colorText};
  }

  @media (min-width: 960px) {
    width: 136px;
    border-radius: 6px;
    padding: 10px 0px;
    font-size: 16px;
  }
`;
