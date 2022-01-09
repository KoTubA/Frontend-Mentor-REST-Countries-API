import React from 'react';
import { CountryFlag } from 'components/atoms/CountryFlag/CountryFlag';
import { CountryInfo } from 'components/atoms/CountryInfo/CountryInfo';
import { CountryName } from 'components/atoms/CoutntryName/CountryName';
import { Wrapper, WrapperDetails } from './CountryListItem.styles';

const CountryListItem = ({ data }) => (
  <Wrapper>
    <CountryFlag>
      <img src={data.flags.svg} alt="" />
    </CountryFlag>
    <WrapperDetails>
      <CountryName>{data.name.common}</CountryName>
      <CountryInfo>
        <span>Population: </span>
        {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '-'}
      </CountryInfo>
      <CountryInfo>
        <span>Region: </span>
        {data.region || '-'}
      </CountryInfo>
      <CountryInfo>
        <span>Capital: </span>
        {data.capital || '-'}
      </CountryInfo>
    </WrapperDetails>
  </Wrapper>
);

export default CountryListItem;
