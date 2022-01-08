import SelectButton from 'components/atoms/SelectButton/SelectButton';
import React from 'react';
import SelectItems from '../SelectItems/SelectItems';
import { Wrapper } from './SelectFilter.styles';

const SelectFilter = () => (
  <Wrapper>
    <SelectButton />
    <SelectItems />
  </Wrapper>
);

export default SelectFilter;
