import React from 'react';
import { Wrapper } from './BackButton.styles';
import { ReactComponent as BackIcon } from 'assets/icons/icon-back.svg';

const BackButton = () => (
  <Wrapper to="/">
    <BackIcon />
    <span>Back</span>
  </Wrapper>
);

export default BackButton;
