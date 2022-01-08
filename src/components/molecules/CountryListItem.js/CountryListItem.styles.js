import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 264px;
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  border-radius: 5px;
  overflow: hidden;
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  padding: 24px;
  width: 100%;
`;
