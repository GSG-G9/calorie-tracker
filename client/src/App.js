import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import Test, { AuthComponent } from './components/TestAuth';

import UserProvider from './components/userProvider';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Test />
        <AuthComponent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
