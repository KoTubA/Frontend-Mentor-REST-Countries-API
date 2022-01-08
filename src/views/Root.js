import React from 'react';
import ThemeStore from 'provider/ThemeStore';
import Theme from 'provider/Theme';
import Home from './Home';
import Navigation from 'components/organisms/Navigation/Navigation';

const Root = () => (
  <ThemeStore>
    <Theme>
      <Navigation />
      <Home />
    </Theme>
  </ThemeStore>
);

export default Root;
