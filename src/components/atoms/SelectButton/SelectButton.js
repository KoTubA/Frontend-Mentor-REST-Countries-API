import React from 'react';
import { Wrapper } from './SelectButton.styles';
import { ReactComponent as SelectIcon } from 'assets/icons/icon-select.svg';
import { useCountries } from 'provider/CountriesStore';

const SelectButton = () => {
  const {
    countriesState: { activeFilter },
    setOpen,
  } = useCountries();

  const filterName = {
    all: 'Filter by Region',
    africa: 'Africa',
    americas: 'America',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Polar',
  };

  return (
    <Wrapper onClick={setOpen}>
      <span>{filterName[activeFilter]}</span>
      <SelectIcon />
    </Wrapper>
  );
};

export default SelectButton;
