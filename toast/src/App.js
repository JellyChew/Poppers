import React from 'react';
import { toast } from 'react-toastify'; //Requires 'npm add react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

function App() {

  function positions_notify() {
    toast('Basic notification');
    toast('Top left notification', {position: toast.POSITION.TOP_LEFT});
    toast('Bottom right notification', {position: toast.POSITION.BOTTOM_RIGHT});
  }

  function types_notify() {
    toast.success('Success notification', {position: toast.POSITION.TOP_LEFT}); //green
    toast.warn('Warning notification!', {position: toast.POSITION.TOP_CENTER}); //yellow
    toast.error('Error notification!', {position: toast.POSITION.BOTTOM_CENTER}); //red
    toast.info('Info notification!', {position: toast.POSITION.BOTTOM_RIGHT}); //blue
  }

  function autoclose_notify() { //default autoclose is set to 5s, or 5000 (ms)
    toast('Slow autoclose', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 8000
    });
    toast('Never autoclose', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    });
  }

  function custom_notify() {
    toast(<CustomToast />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome to the Toast App!</div>
      </header>
      <body className="App-body">
        <div><button onClick = {positions_notify}>Positional toast notifications!</button></div>
        <div><button onClick = {types_notify}>Different toast notification types!</button></div>
        <div><button onClick = {autoclose_notify}>Autoclose Timers</button></div>
        <div><button onClick = {custom_notify}>Custom Notification</button></div>
      </body>
    </div>
  );
}

function CustomToast({ closeToast }) {
  return (
    <div>
      Custom close button!
      <button onClick = {closeToast}>Close</button>
    </div>
  )
}

export default App;
