import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colorElements};
  color: ${({ theme }) => theme.colorInput};
  border-radius: 5px;
  line-height: 20px;
  padding: 14px 19px 14px 24px;
  border: 0;
  outline: none;
  width: 100%;
  margin-top: 16px;

  svg {
    width: 10px;
    height: 10px;
  }
`;
