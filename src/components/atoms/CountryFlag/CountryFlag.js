import styled from 'styled-components';

export const CountryFlag = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.colorElementsHover};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
