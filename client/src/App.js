import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
