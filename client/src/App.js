import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';

import MultiStep from './components/MultiStep';

function App() {
  return (
    <ThemeProvider>
      <MultiStep />
    </ThemeProvider>
  );
}

export default App;
