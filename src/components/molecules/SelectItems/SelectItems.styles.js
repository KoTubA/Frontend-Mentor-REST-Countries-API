import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colorElements};
  color: ${({ theme }) => theme.colorText};
  margin: 0;
  padding: 12px 0px;
  list-style-type: none;
  overflow: hidden;
  font-size: 12px;

  @media (min-width: 680px) {
    font-size: 14px;
    top: 52px;
  }
`;
