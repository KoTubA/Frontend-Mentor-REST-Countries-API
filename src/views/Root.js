import React from 'react';
import ThemeStore from 'provider/ThemeStore';
import Theme from 'provider/Theme';
import Home from './Home';
import Navigation from 'components/organisms/Navigation/Navigation';
import { CountriesStore } from 'provider/CountriesStore';
import CountryDetails from './CountryDetails';

const Root = () => (
  <ThemeStore>
    <Theme>
      <CountriesStore>
        <Navigation />
        <Home />
      </CountriesStore>
    </Theme>
  </ThemeStore>
);

export default Root;
