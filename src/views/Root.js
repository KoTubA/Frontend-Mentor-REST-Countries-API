import React from 'react';
import ThemeStore from 'provider/ThemeStore';
import Theme from 'provider/Theme';
import Home from './Home';
import Navigation from 'components/organisms/Navigation/Navigation';
import { CountriesStore } from 'provider/CountriesStore';
import CountryDetails from './CountryDetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <ThemeStore>
      <Theme>
        <CountriesStore>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CountriesStore>
      </Theme>
    </ThemeStore>
  </BrowserRouter>
);

export default Root;
