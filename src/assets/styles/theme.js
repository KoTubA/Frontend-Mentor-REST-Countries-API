import iconMoon from 'assets/icons/icon-moon.svg';
import iconSun from 'assets/icons/icon-sun.svg';

export const theme = {
  dark: {
    colorElementsHover: 'hsl(209deg 22% 28%)',
    colorElements: 'hsl(209, 23%, 22%)',
    colorBackground: 'hsl(207, 26%, 17%)',
    colorText: 'hsl(0, 0%, 100%)',
    colorInput: 'hsl(0, 0%, 100%)',
    colorSelect: 'hsl(0, 0%, 100%)',
    icon: iconMoon,
    status: 'Dark mode',
  },
  light: {
    colorElementsHover: 'hsl(0deg 0% 95%)',
    colorElements: 'hsl(0, 0%, 100%)',
    colorBackground: 'hsl(0, 0%, 98%)',
    colorText: 'hsl(200, 15%, 8%)',
    colorInput: 'hsl(0, 0%, 52%)',
    colorSelect: 'hsl(0, 0%, 0%)',
    icon: iconSun,
    status: 'Light mode',
  },
};
