import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import Pages from '../Pages';

import Provider from '../components/userProvider';

import './style.css';

function App() {
  return (
    <ThemeProvider>
      <Provider>
        <Router>
          <Pages />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
