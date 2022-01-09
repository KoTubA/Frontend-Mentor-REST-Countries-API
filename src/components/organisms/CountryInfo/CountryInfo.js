import BackButton from 'components/atoms/BackButton/BackButton';
import CountryData from 'components/molecules/CountryData/CountryData';
import React from 'react';
import { Wrapper } from './CountryInfo.styles';

const CountryInfo = () => (
  <Wrapper>
    <BackButton />
    <CountryData />
  </Wrapper>
);

export default CountryInfo;
