import CountryListItem from 'components/molecules/CountryListItem.js/CountryListItem';
import React from 'react';
import { Wrapper } from './CountryList.styles';

const CountryList = () => (
  <Wrapper>
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
  </Wrapper>
);

export default CountryList;
