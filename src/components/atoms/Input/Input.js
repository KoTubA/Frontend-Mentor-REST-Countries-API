import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.colorElements};
  color: ${({ theme }) => theme.colorInput};
  border: none;
  outline: none;
  flex: 1 1;
  padding: 14px 14px 14px 74px;
  border-radius: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.colorText};
  }
`;
