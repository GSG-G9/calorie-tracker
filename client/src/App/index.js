import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import Pages from '../Pages';
import Provider from '../components/userProvider';
import DesktopNavBar from '../components/DesktopNavBar';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import './style.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Provider>
          <Router>
            <DesktopNavBar />
            <NavBar />
            <Pages />
            <Footer />
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
