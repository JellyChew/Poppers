import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

function App() {

  const [ open, setOpen ] = useState(false);
  let isOpen = open ? 'popup-container-active' : 'popup-container-disabled';

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Popup App!</p>
        <button onClick={() => setOpen(true)}> Click me! </button>
        <div class="popup-container" style={{display: open ? 'flex' : 'none'}} id="container">
          <div class="popup">
            <button id="close" onClick={() => {setOpen(false)}}>&times;</button>
            <h1>Sample text!</h1>
            <p>More sample text!</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
