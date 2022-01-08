import styled from 'styled-components';

export const StatusInfo = styled.p`
  grid-column: 1 / -1;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colorText};
  text-align: center;

  @media (min-width: 960px) {
    font-size: 18px;
  }
`;
