import { SelectItem } from 'components/atoms/SelectItem.js/SelectItem';
import React from 'react';
import { Wrapper } from './SelectItems.styles';
import { useCountries } from 'provider/CountriesStore';

const SelectItems = () => {
  const {
    countriesState: { activeFilter },
    openFilter,
    setFilter,
    setOpenFilter,
  } = useCountries();

  const handleClick = (e) => {
    setFilter(e.target.dataset.value);
    setOpenFilter(false);
  };

  return (
    <>
      {openFilter ? (
        <Wrapper>
          {activeFilter !== 'all' ? (
            <SelectItem onClick={handleClick} data-value="all">
              All
            </SelectItem>
          ) : null}
          <SelectItem onClick={handleClick} data-value="africa">
            Africa
          </SelectItem>
          <SelectItem onClick={handleClick} data-value="americas">
            America
          </SelectItem>
          <SelectItem onClick={handleClick} data-value="asia">
            Asia
          </SelectItem>
          <SelectItem onClick={handleClick} data-value="europe">
            Europe
          </SelectItem>
          <SelectItem onClick={handleClick} data-value="oceania">
            Oceania
          </SelectItem>
          <SelectItem onClick={handleClick} data-value="antarctic">
            Polar
          </SelectItem>
        </Wrapper>
      ) : null}
    </>
  );
};

export default SelectItems;
