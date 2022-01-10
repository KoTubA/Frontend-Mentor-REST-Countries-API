import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 32px;

    path {
      fill: ${({ theme }) => theme.colorInput};
    }
  }

  @media (min-width: 680px) {
    padding: 0;
    max-width: 380px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 960px) {
    max-width: 480px;
  }
`;
