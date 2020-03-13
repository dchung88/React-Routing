import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/home';
import Number from './components/number';
import Word from './components/word';
import ColorTextBackground from './components/color_text_background';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path= "/home" />
        <Number path= "/:num" />
        <Word path= "/:word" />
        <ColorTextBackground path= "/:text/:color/:background" />
      </Router>
      
    </div>
  );
}

export default App;
