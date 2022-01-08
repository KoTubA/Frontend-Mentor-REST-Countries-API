import CountryList from 'components/organisms/CountryList/CountryList';
import Filter from 'components/organisms/Filter/Filter';
import React from 'react';
import { Wrapper } from './Home.styles';

const Home = () => (
  <Wrapper>
    <Filter />
    <CountryList />
  </Wrapper>
);

export default Home;
