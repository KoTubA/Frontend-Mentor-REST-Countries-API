import React from 'react';
import { CountryFlag } from 'components/atoms/CountryFlag/CountryFlag';
import { CountryInfo } from 'components/atoms/CountryInfo/CountryInfo';
import { CountryName } from 'components/atoms/CoutntryName/CountryName';
import { Wrapper, WrapperDetails } from './CountryListItem.styles';

const CountryListItem = () => (
  <Wrapper>
    <CountryFlag />
    <WrapperDetails>
      <CountryName>Germany</CountryName>
      <CountryInfo>
        <span>Population: </span>81,770,900
      </CountryInfo>
      <CountryInfo>
        <span>Region: </span>Europe
      </CountryInfo>
      <CountryInfo>
        <span>Capital: </span>Berlin
      </CountryInfo>
    </WrapperDetails>
  </Wrapper>
);

export default CountryListItem;
