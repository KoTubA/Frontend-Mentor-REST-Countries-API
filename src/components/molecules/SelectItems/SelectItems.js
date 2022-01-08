import { SelectItem } from 'components/atoms/SelectItem.js/SelectItem';
import React from 'react';
import { Wrapper } from './SelectItems.styles';

const SelectItems = () => (
  <Wrapper>
    <SelectItem>Africa</SelectItem>
    <SelectItem>America</SelectItem>
    <SelectItem>Asia</SelectItem>
    <SelectItem>Europe</SelectItem>
    <SelectItem>Oceania</SelectItem>
    <SelectItem>Polar</SelectItem>
  </Wrapper>
);

export default SelectItems;
