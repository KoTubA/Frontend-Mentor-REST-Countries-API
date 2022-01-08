import React from 'react';
import { Wrapper } from './SelectButton.styles';
import { ReactComponent as SelectIcon } from 'assets/icons/icon-select.svg';

const SelectButton = () => (
  <Wrapper>
    <span>Filter by Region</span>
    <SelectIcon />
  </Wrapper>
);

export default SelectButton;
