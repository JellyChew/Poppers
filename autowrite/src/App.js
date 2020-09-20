import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let text = "This is a sample line of text for the autowrite demo!";
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const addLetter = setInterval(() => {
      if (counter === text.length + 5) {
        setCounter(0);
      } else {
        setCounter((counter) => counter + 1);
      }
    }, 100);
    return () => clearInterval(addLetter);
  });

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the autowrite app!</p>
        <p>
          {text.substring(0, counter)}
        </p>
        <p>
          {seconds} seconds have elapsed since mounting. 
        </p>
      </header>
    </div>
  );
}

export default App;
