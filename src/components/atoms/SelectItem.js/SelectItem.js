import styled from 'styled-components';

export const SelectItem = styled.li`
  line-height: 16px;
  padding: 4px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colorElementsHover};
  }

  @media (min-width: 1150px) {
    line-height: 20px;
  }
`;
