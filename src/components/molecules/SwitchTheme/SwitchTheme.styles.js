import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colorText};

  img {
    width: 16px;
  }
`;
