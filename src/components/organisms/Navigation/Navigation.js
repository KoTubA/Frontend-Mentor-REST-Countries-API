import React from 'react';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import SwitchTheme from 'components/molecules/SwitchTheme/SwitchTheme';
import { NavWrapper, Wrapper } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <NavWrapper>
    <Wrapper>
      <Link to="/">
        <MainTitle>Where in the world?</MainTitle>
      </Link>
      <SwitchTheme />
    </Wrapper>
  </NavWrapper>
);

export default Navigation;
