import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  let isOpen = open ? "active" : "disabled";
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>Welcome to the hamburger app!</p>
        </header>
        <body>
          <div><button className={isOpen} onClick = {() => setOpen(!open)}>☰</button></div>
          <div>
            <nav className={isOpen}>
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </nav>
          </div>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
