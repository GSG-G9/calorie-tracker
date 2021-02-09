import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import BasicUserInfo from './components/signUpForm/BasicUserInfo';
import GenderSelection from './components/signUpForm/GenderSelection';
import PhysicalCharacteristics from './components/signUpForm/PhysicalCharacteristics';

function App() {
  return (
    <ThemeProvider>
      <BasicUserInfo />
      <GenderSelection />
      <PhysicalCharacteristics />
    </ThemeProvider>
  );
}

export default App;
