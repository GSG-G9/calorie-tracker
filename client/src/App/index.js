import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import Pages from '../Pages';
import Provider from '../components/UserProvider';
import DesktopNavBar from '../components/layout/DesktopNavBar';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
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
