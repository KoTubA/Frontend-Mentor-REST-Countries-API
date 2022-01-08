import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import SwitchTheme from 'components/molecules/SwitchTheme/SwitchTheme';
import React from 'react';
import { NavWrapper, Wrapper } from './Navigation.styles';

const Navigation = () => (
  <NavWrapper>
    <Wrapper>
      <MainTitle>Where in the world?</MainTitle>
      <SwitchTheme />
    </Wrapper>
  </NavWrapper>
);

export default Navigation;
