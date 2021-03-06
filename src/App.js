import './App.css';
import { Reset } from 'styled-reset';
import React from 'react';
import Cards from './Components/Cards';
import terrain from './images/terrain.jpg';
import Title from './Components/Title';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${terrain})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no - repeat',
      }}
    >
      <Reset />
      <Title />
      <Cards />
    </div>
  );
}

export default App;
