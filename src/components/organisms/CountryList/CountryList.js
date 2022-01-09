import React from 'react';
import CountryListItem from 'components/molecules/CountryListItem/CountryListItem';
import { useCountries } from 'provider/CountriesStore';
import { Wrapper } from './CountryList.styles';
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo';
import { Link } from 'react-router-dom';

const CountryList = () => {
  const {
    countriesState: { countries, activeFilter, activeQuery, isLoading, isError },
  } = useCountries();
  return (
    <Wrapper>
      {isLoading ? (
        <StatusInfo>Loading...</StatusInfo>
      ) : isError ? (
        <StatusInfo>Something went wrong. Please try again, or contact our support.</StatusInfo>
      ) : (
        countries
          .filter((country) => {
            if (activeFilter !== 'all' && activeQuery) {
              return country.name.common.toLowerCase().includes(activeQuery.toLowerCase()) && country.region.toLowerCase() === activeFilter;
            } else if (activeQuery) {
              return country.name.common.toLowerCase().includes(activeQuery.toLowerCase());
            } else if (activeFilter !== 'all') {
              return country.region.toLowerCase() === activeFilter;
            } else {
              return country;
            }
          })
          .map((data) => (
            <Link to={`/country/${data.cca3}`} key={data.cca3}>
              <CountryListItem data={data} />
            </Link>
          ))
      )}
    </Wrapper>
  );
};

export default CountryList;
