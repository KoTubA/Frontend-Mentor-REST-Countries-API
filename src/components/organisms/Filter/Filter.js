import React from 'react';
import { Wrapper } from './Filter.styles';
import FormField from 'components/molecules/FormField/FormField';
import SelectFilter from 'components/molecules/SelectFilter/SelectFilter';

const Filter = () => (
  <Wrapper>
    <FormField label="Search for country" name="title" id="title" placeholder="Search for country..." />
    <SelectFilter />
  </Wrapper>
);

export default Filter;
