import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colorElements};
  color: ${({ theme }) => theme.colorInput};
  margin: 0;
  padding: 0px;
  list-style-type: none;
  overflow: hidden;
  visibility: hidden;
`;
