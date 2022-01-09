import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  border-radius: 2px;
  font-size: 14px;
  padding: 6px 0px;

  span {
    margin-left: 8px;
    line-height: 20px;
  }

  svg path {
    fill: ${({ theme }) => theme.colorText};
  }
`;
