import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import BasicUserInfo from './components/signUpForm/BasicUserInfo';

function App() {
  return (
    <ThemeProvider>
      <BasicUserInfo />
    </ThemeProvider>
  );
}

export default App;
