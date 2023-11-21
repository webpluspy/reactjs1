import React, { useState } from 'react';
import './bgchanger.css';

function BgChanger() {
  // State to store the current background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to handle button clicks and update the background color
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Background Changer</h1>
      <div className="button-container">
        <button onClick={() => changeBackgroundColor('red')}>Red</button>
        <button onClick={() => changeBackgroundColor('green')}>Green</button>
        <button onClick={() => changeBackgroundColor('blue')}>Blue</button>
      </div>
    </div>
  );
}

export default BgChanger;
