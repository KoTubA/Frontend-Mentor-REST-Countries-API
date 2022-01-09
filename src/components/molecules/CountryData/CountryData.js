import React from 'react';
import { CountryFlagDetails } from 'components/atoms/CountryFlagDetails/CountryFlagDetails';
import { Wrapper, WrapperDetails, WrapperBorderCountry, WrapperDetailsBorder, WrapperDetailsInfo, WrapperDataDetails, WrapperData } from './CountryData.style';
import { CountryInfoDetails } from 'components/atoms/CountryInfoDetails/CountryInfoDetails';
import { CountryNameDetails } from 'components/atoms/CountryNameDetails/CountryNameDetails';
import { BorderCountriesTitle } from 'components/atoms/BorderCountriesTitle/BorderCountriesTitle';
import { BorderCountry } from 'components/atoms/BorderCountry/BorderCountry';
import { useParams } from 'react-router-dom';
import { useCountries } from 'provider/CountriesStore';
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo';

const CountryData = () => {
  const { id } = useParams();
  const {
    countriesState: { countries, isLoading, isError },
  } = useCountries();

  const filterCountries = countries.filter((data) => data.cca3 === id);

  return (
    <Wrapper>
      {isLoading ? (
        <StatusInfo>Loading...</StatusInfo>
      ) : isError ? (
        <StatusInfo>Something went wrong. Please try again, or contact our support.</StatusInfo>
      ) : !filterCountries.length ? (
        <StatusInfo>No such country was found. Go back to the home page.</StatusInfo>
      ) : (
        filterCountries.map((data) => (
          <WrapperData key={data.cca3}>
            <CountryFlagDetails>
              <img src={data.flags.svg} alt="" />
            </CountryFlagDetails>
            <WrapperDataDetails>
              <CountryNameDetails>{data.name.common}</CountryNameDetails>
              <WrapperDetailsInfo>
                <WrapperDetails>
                  <CountryInfoDetails>
                    <span>Native Name:</span> {data.name.nativeName[Object.keys(data.name.nativeName)[0]].common || '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Population:</span> {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Region:</span> {data.region || '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Sub Region:</span> {data.subregion || '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Capital:</span> {data.capital || '-'}
                  </CountryInfoDetails>
                </WrapperDetails>
                <WrapperDetails>
                  <CountryInfoDetails>
                    <span>Top Level Domain:</span> {'tld' in data ? data.tld.map((item, index) => (index ? ' ' : '') + item) : '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Currencies:</span> {'currencies' in data ? Object.keys(data.currencies).map((item, index) => (index ? ', ' : '') + data.currencies[item].name) : '-'}
                  </CountryInfoDetails>
                  <CountryInfoDetails>
                    <span>Languages:</span> {'languages' in data ? Object.keys(data.languages).map((item, index) => (index ? ', ' : '') + data.languages[item]) : '-'}
                  </CountryInfoDetails>
                </WrapperDetails>
              </WrapperDetailsInfo>
              <WrapperDetailsBorder>
                <BorderCountriesTitle>Border Countries:</BorderCountriesTitle>
                <WrapperBorderCountry>
                  {'borders' in data
                    ? data.borders.map((item) => (
                        <BorderCountry to={`/country/${item}`} key={item}>
                          {countries.find((country) => country.cca3 === item).name.common}
                        </BorderCountry>
                      ))
                    : '-'}
                </WrapperBorderCountry>
              </WrapperDetailsBorder>
            </WrapperDataDetails>
          </WrapperData>
        ))
      )}
    </Wrapper>
  );
};

export default CountryData;
