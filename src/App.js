import './App.css';
import { Reset } from 'styled-reset';
import React from 'react';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Reset />
      <Cards />
    </div>
  );
}

export default App;
