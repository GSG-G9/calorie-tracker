import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';

import {
  ThemeProvider as Provider,
  createMuiTheme,
} from '@material-ui/core/styles';

const { node } = PropTypes;

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00262F' },
    secondary: { main: '#E1EBED' },
  },
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
