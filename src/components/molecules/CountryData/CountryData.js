import React from 'react';
import { CountryFlagDetails } from 'components/atoms/CountryFlagDetails/CountryFlagDetails';
import { Wrapper, WrapperDetails, WrapperBorderCountry, WrapperDetailsBorder, WrapperDetailsInfo, WrapperData } from './CountryData.style';
import { CountryInfoDetails } from 'components/atoms/CountryInfoDetails/CountryInfoDetails';
import { CountryNameDetails } from 'components/atoms/CountryNameDetails/CountryNameDetails';
import { BorderCountriesTitle } from 'components/atoms/BorderCountriesTitle/BorderCountriesTitle';
import { BorderCountry } from 'components/atoms/BorderCountry/BorderCountry';

const CountryData = () => (
  <Wrapper>
    <CountryFlagDetails />
    <WrapperData>
      <CountryNameDetails>Belgium</CountryNameDetails>
      <WrapperDetailsInfo>
        <WrapperDetails>
          <CountryInfoDetails>
            <span>Native Name:</span> België
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Population:</span> 11,319,511
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Region:</span> Europe
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Sub Region:</span> Western Europe
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Capital:</span> Brussels
          </CountryInfoDetails>
        </WrapperDetails>
        <WrapperDetails>
          <CountryInfoDetails>
            <span>Top Level Domain:</span> .be
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Currencies:</span> Euro
          </CountryInfoDetails>
          <CountryInfoDetails>
            <span>Languages:</span> Dutch, French, German
          </CountryInfoDetails>
        </WrapperDetails>
      </WrapperDetailsInfo>
      <WrapperDetailsBorder>
        <BorderCountriesTitle>Border Countries:</BorderCountriesTitle>
        <WrapperBorderCountry>
          <BorderCountry>France</BorderCountry>
          <BorderCountry>Germany</BorderCountry>
          <BorderCountry>Netherlands</BorderCountry>
        </WrapperBorderCountry>
      </WrapperDetailsBorder>
    </WrapperData>
  </Wrapper>
);

export default CountryData;
