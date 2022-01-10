import React from 'react';
import CountryListItem from 'components/molecules/CountryListItem/CountryListItem';
import { useCountries } from 'provider/CountriesStore';
import { Wrapper } from './CountryList.styles';
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo';
import { Link } from 'react-router-dom';

const CountryList = () => {
  const {
    countriesState: { isLoading, isError },
    currecntCountriesState,
  } = useCountries();
  return (
    <Wrapper>
      {isLoading ? (
        <StatusInfo>Loading...</StatusInfo>
      ) : isError ? (
        <StatusInfo>Something went wrong. Please try again, or contact our support.</StatusInfo>
      ) : (
        currecntCountriesState.map((data) => (
          <Link to={`/country/${data.cca3}`} key={data.cca3}>
            <CountryListItem data={data} />
          </Link>
        ))
      )}
    </Wrapper>
  );
};

export default CountryList;
