// @ts-nocheck

import { createTheme } from '@mui/material/styles';

export const ThemeConfigs = {
  palette: {
    primary: {
      // main: '#ca0d0d',
      main: '#af0111',
      // main: '#0276aa',
    },
    secondary: {
      // main: '#fff',
      // main: '#ed8600',
      // main: '#ffc107',
      main: '#e2aa00',
    },
    textLowContrast: {
      main: '#ececec',
      dark: '#c7c7c7',
    },
    content: '#303030',
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};

// Create a theme instance.
export const theme = createTheme(ThemeConfigs);
