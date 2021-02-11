import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';

import {
  ThemeProvider as Provider,
  createMuiTheme,
} from '@material-ui/core/styles';

const { node } = PropTypes;

const paletteColors = {
  1: '#00262F',
  2: '#044C58',
  3: '#035C6E',
  4: '#3F8994',
  5: '#7DB3BD',
  6: '#E1EBED',
  white: '#fff',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: paletteColors[2],
      dark: paletteColors[1],
      light: '#fff',
      contrastText: '#fff',
    },
    secondary: { main: paletteColors[6] },
  },
  customColors: paletteColors,
});

function ThemeProvider({ children }) {
  return (
    <Provider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </Provider>
  );
}

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
