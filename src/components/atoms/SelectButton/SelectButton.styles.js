import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colorElements};
  color: ${({ theme }) => theme.colorText};
  border-radius: 5px;
  line-height: 20px;
  padding: 14px 19px 14px 24px;
  border: 0;
  outline: none;
  width: 100%;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadowFilter};

  span {
    font-size: 12px;
  }

  svg {
    width: 10px;
    height: 10px;
  }

  svg path {
    fill: ${({ theme }) => theme.colorSelect};
  }

  @media (min-width: 680px) {
    margin-top: 0px;

    span {
      font-size: 14px;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }

  @media (min-width: 1150px) {
    padding: 18px 19px 18px 24px;
  }
`;
