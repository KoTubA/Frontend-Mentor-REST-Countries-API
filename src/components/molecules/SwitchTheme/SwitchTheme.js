import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { ThemeContext } from 'provider/ThemeStore';
import { Wrapper } from './SwitchTheme.styles';
import { SwitchStatus } from 'components/atoms/SwitchStatus/SwitchStatus';

const SwitchTheme = () => {
  const theme = useTheme();
  const { switchTheme } = useContext(ThemeContext);

  return (
    <Wrapper onClick={switchTheme}>
      <img src={theme.icon} alt="" />
      <SwitchStatus>{theme.status}</SwitchStatus>
    </Wrapper>
  );
};

export default SwitchTheme;
