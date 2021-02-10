import React from 'react';
import ThemeProvider from './components/ThemeProvider';

import SignupFormSteps from './components/SignupFormSteps';

function App() {
  return (
    <ThemeProvider>
      <SignupFormSteps />
    </ThemeProvider>
  );
}

export default App;
