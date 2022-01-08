import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import SwitchTheme from 'components/molecules/SwitchTheme/SwitchTheme';
import React from 'react';
import { Wrapper } from './Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <MainTitle>Where in the world?</MainTitle>
    <SwitchTheme />
  </Wrapper>
);

export default Navigation;
